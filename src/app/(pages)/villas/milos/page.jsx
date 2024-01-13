import Villa from "@/app/_components/Villa"




const tag = 'AN OASIS OF PIECE AND QUIET'
const images = [
    '/milos_1.webp',
    '/milos_2.webp',
    '/milos_3.webp',
    '/milos_4.webp',
    '/milos_5.webp',
    '/milos_6.webp',
]

const getData = async () => {
    let url = `${process.env.API_URL}/villas/3?populate=details,facilities,roomtypes,bathroom,images`
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
export default async function Page() {
    const data = await getData()
    console.log('milos')
    console.log(data.attributes.facilities.data)
   
    return (
        <Villa 
            id="milos"
            tag={tag}
            name="milos"
            sidebarImg="/milos_1.webp"
            mainImg="/milos_8.webp"
            scrollImg="/milos_3.webp"
            facilitiesImg="/milos_4.webp"
            title={'An oasis of piece and quiet'}
            description={data?.attributes?.shortDescription}
            details={data?.attributes?.details[0]}
            facilities={data?.attributes?.facilities}
            bathroom={data?.attributes?.bathroom[0]}
            guestToilet={data?.attributes?.bathroom[1]}
            roomTypes={data?.attributes?.roomtypes}
            imagesSlider={images}
            outdorSqr={200}
            interiorSqr={200}
            />
    )
}