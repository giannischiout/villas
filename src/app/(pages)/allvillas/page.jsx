import AllVillas from "@/app/_components/AllVillas";
import { cookies } from "next/headers";


const getData = async () => {
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
 
    const titlesAndDescriptions = json.data.map((villa, index) => {
        return {
            title: villa.attributes.title,
            description: villa.attributes.shortDescription,
            details: villa.attributes.details[0],
            id: villa.id
        };
    });


    return titlesAndDescriptions
}

const Page = async () => {
    const data = await getData();
    return (
        <div className="allvillas_page_container ">
            <AllVillas data={data} hasDetails={true}/>
        </div>
    )
}

export default Page;