import VillaNew from "@/app/_components/VillaNew"
import ImageSlider from "@/app/_components/ImageSlider"
import AllVillas from "@/app/_components/AllVillas"
import { cookies } from 'next/headers'
import { text } from "@/translations"


function getImages(sliderImgs) {
    let images = [];
    if (sliderImgs && sliderImgs.length) {
        sliderImgs.forEach((img) => {
            images.push(`${process.env.NEXT_PUBLIC_BASE_API_URL}${img.attributes.url}`);
        });
    }
    return images;
}




const getData = async (id) => {
    console.log(id)
    const cookieStore = cookies()
    const locale = cookieStore.get('locale') || 'locale=en' 
    let url = `${process.env.API_URL}/villas?${locale?.value}&populate=details,facilities,roomtypes,bathroom,images,views,interiorImages,roomImages`
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },

    });
    let json = await res.json();

    let villa = json.data.find(villa => villa.id == id);
  
    const otherVillasData = json.data.filter(otherVilla =>otherVilla.id !== parseInt(id));
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
 
  
    const imagesSlider = getImages(sliderImgs);
    const details = data?.attributes?.details[0]

   
    return (
        <div>
            <>
                 <VillaNew data={data}/>
             <div className='villa_slider'>
                 <ImageSlider images={imagesSlider} />
             </div>
             <p className="allvillas_header">{text[locale]?.explore}</p>
             <AllVillas
                 details={details}
                 data={otherVillas}
             />
            </>
        
        </div>

    )
}