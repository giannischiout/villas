import Villa from "@/app/_components/Villa"




const tag = 'AN OASIS OF PIECE AND QUIET'
const images = [
    '/CASTRO_5.webp',
    '/CASTRO_6.webp',
    '/CASTRO_7.webp',
    '/CASTRO_8.webp',
    '/CASTRO_9.webp',
    '/CASTRO_10.webp',
    '/CASTRO_11.webp',
]

const getData = async () => {
    let url = `${process.env.API_URL}/villas/1?locale=el&populate=details,facilities,roomtypes,bathroom,images`
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
    console.log('castro')
    console.log(data.attributes.facilities.data)
   
    return (
        <Villa 
            id="castro"
            tag={tag}
            name="castro" 
            sidebarImg="/CASTRO_2.webp"
            mainImg="/CASTRO_1.webp"
            scrollImg="/CASTRO_3.webp"
            facilitiesImg="/CASTRO_4.webp"
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