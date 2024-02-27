import VillaNew from "@/app/_components/VillaNew"
import ImageSlider from "@/app/_components/ImageSlider"
import { RoomSlider } from "@/app/_components/RoomSlider"
import AllVillas from "@/app/_components/AllVillas"
import { cookies } from 'next/headers'
import { mapID } from "@/lib/mapIds"
import { text } from "@/translations"

function calculateProportionalWidth(originalWidth, originalHeight, targetHeight) {
    return (originalWidth / originalHeight) * targetHeight;
}
function getImages(sliderImgs) {
    let images = [];
    if (sliderImgs && sliderImgs.length) {
        sliderImgs.forEach((img) => {
            images.push(`${process.env.NEXT_PUBLIC_BASE_API_URL}${img.attributes.url}`);
        });
    }
    return images;
}


function getImagesWidthProportions(sliderImgs) {
    let images = []
    if (sliderImgs && sliderImgs.length) {
        sliderImgs.forEach((img) => {
            images.push({
                src: `${process.env.NEXT_PUBLIC_BASE_API_URL}${img.attributes.url}`,
                width: calculateProportionalWidth(img.attributes.width, img.attributes.height, 400),
            });
        });
    }
    return images
}

const getData = async (id) => {
    const cookieStore = cookies()
    const locale = cookieStore.get('locale')
    let url = `${process.env.API_URL}/villas?${locale?.value}&populate=details,facilities,roomtypes,bathroom,images,views,interiorImages,roomImages `
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },

    });
    let json = await res.json();
   
    //CREATE THE DATA FOR THE REMAINING VILLAS CARDS:
    let newid = mapID(id, locale?.value)
    let villa = json.data.find(villa => villa.id == newid);
    const otherVillasData = json.data.filter(otherVilla =>otherVilla.id !== parseInt(newid));
    const titlesAndDescriptions = otherVillasData.map((villa) => {
        return {
            title: villa.attributes.title,
            description: villa.attributes.shortDescription,
            id: villa.id
        };
    });


    return {
        data: villa,
        otherVillas: titlesAndDescriptions
    };
}
export default async function Page({ params }) {
    const cookieStore = cookies()
    const locale = cookieStore.get('locale')?.value || 'locale=en'
    const { data, otherVillas } = await getData(params.id)
    const sliderImgs = data?.attributes?.interiorImages?.data;
    const roomsImages = data?.attributes?.roomImages.data;
    console.log('other villas')
    console.log( otherVillas)

  
    const imagesSlider = getImages(sliderImgs);
    const roomsSlider = getImagesWidthProportions(roomsImages);
    const details = data?.attributes?.details[0]

   
    return (
        <div>
            <>
                 <VillaNew data={data}/>
             <div className='villa_slider'>
                 <ImageSlider images={imagesSlider} />
             </div>
             {/* <RoomSlider images={roomsSlider} /> */}
             <p className="allvillas_header">{text[locale].explore}</p>
             <AllVillas
                 details={details}
                 data={otherVillas}
             />
            </>
        
        </div>

    )
}