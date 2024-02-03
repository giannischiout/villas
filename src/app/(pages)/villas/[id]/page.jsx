import Villa from "@/app/_components/Villa"
import VillaNew from "@/app/_components/VillaNew"


const tag = 'AN OASIS OF PIECE AND QUIET'
const images = [
    '/milos_1.webp',
    '/milos_2.webp',
    '/milos_3.webp',
    '/milos_4.webp',
    '/milos_5.webp',
    '/milos_6.webp',
]

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
export default async function Page({params}) {
    const data = await getData(params.id)
  
    return (
        <VillaNew
            data={data}
            // id="milos"
            // tag={tag}
            // name="milos"
            // sidebarImg="/milos_1.webp"
            // mainImg="/milos_8.webp"
            // scrollImg="/milos_3.webp"
            // facilitiesImg="/milos_4.webp"
            // title={'An oasis of piece and quiet'}
            // description={data?.attributes?.shortDescription}
            // details={data?.attributes?.details[0]}
            // facilities={data?.attributes?.facilities}
            // bathroom={data?.attributes?.bathroom[0]}
            // guestToilet={data?.attributes?.bathroom[1]}
            // roomTypes={data?.attributes?.roomtypes}
            // imagesSlider={images}
            // outdorSqr={200}
            // interiorSqr={200}
            />
    )
}