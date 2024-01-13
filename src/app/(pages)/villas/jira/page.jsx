import Villa from "@/app/_components/Villa"




const tag = 'AN OASIS OF PIECE AND QUIET'


const images = [
    '/jira/jira_1.webp',
    '/jira/jira_2.webp',
    '/jira/jira_3.webp',
    '/jira/jira_4.webp',
    '/jira/jira_5.webp',
    '/jira/jira_6.webp',

]

const getData = async () => {
    let url = `${process.env.API_URL}/villas/2?populate=details,facilities,roomtypes,bathroom`
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
    console.log('----------------------------------- dataaa')
    console.log('----------------------------------- dataaa')
    console.log(data)
   
    return (
        <Villa 
            id="jira"
            tag={tag}
            name="jira" 
            sidebarImg="/jira/jira_1.webp"
            mainImg="/jira/jira_7.webp"
            scrollImg="/jira/jira_6.webp"
            facilitiesImg="/jira/jira_6.webp"
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