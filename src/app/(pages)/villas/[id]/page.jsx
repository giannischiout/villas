import Villa from "@/app/_components/Villa"
import VillaNew from "@/app/_components/VillaNew"
import ImageSlider from "@/app/_components/ImageSlider"
import { RoomSlider } from "@/app/_components/RoomSlider"
import AllVillas from "@/app/_components/AllVillas"
const getData = async (id) => {
    let url = `${process.env.API_URL}/villas/${id}?populate=details,facilities,roomtypes,bathroom,images,views,interiorImages,roomImages `
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },

    });
    let json = await res.json();
    return json.data;
}
export default async function Page({ params }) {
    const data = await getData(params.id)
    const sliderImgs = data?.attributes?.interiorImages.data;
    const roomsImages = data?.attributes?.roomImages.data;
    const description = data?.attributes?.shortDescription;
    

    function calculateProportionalWidth(originalWidth, originalHeight, targetHeight) {
        return (originalWidth / originalHeight) * targetHeight;
    }
    function getImages(sliderImgs) {
        let images = []
        sliderImgs.map((img) => {
            images.push(`${process.env.NEXT_PUBLIC_BASE_API_URL}${img.attributes.url}`)
        })
        return images
    }

    function getImagesWidthProportions(sliderImgs) {
        let images = []
        sliderImgs.map((img) => {
            images.push({
                src: `${process.env.NEXT_PUBLIC_BASE_API_URL}${img.attributes.url}`,
                width: calculateProportionalWidth(img.attributes.width, img.attributes.height, 400)
            })
        })
        return images
    }
    const imagesSlider = getImages(sliderImgs);
    const roomsSlider = getImagesWidthProportions(roomsImages);

    return (
        <>
            <VillaNew data={data}
            />
            <div className='villa_slider'>
                <ImageSlider images={imagesSlider} />
            </div>
            <RoomSlider images={roomsSlider} />
            <AllVillas 
                description={description}
                title={data?.attributes?.title}
            />
        </>

    )
}