import Map from "@/app/_components/Map";
import Image from 'next/image';
import { cookies } from "next/headers";

import { text } from "@/translations";

const fetchContact = async () => {
    const cookieStore = cookies()
    const locale = cookieStore.get('locale')

    const url = `${process.env.API_URL}/hotel?${locale?.value}&populate=hotelcontact`

    let data = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }, {
        cache: 'no-cache'
    })

    let json = await data.json()

    return json.data;
}
const Page = async () => {
    const cookieStore = cookies()
    const locale = cookieStore.get('locale')?.value || 'locale=en'

    const data = await fetchContact()
    const hcontact = data?.attributes.hotelcontact
    const location = {
        lng: parseFloat(data.attributes.longitude), // Replace with your desired latitude
        lat: parseFloat(data.attributes.latitude), // Replace with your desired longitude
    };
    return (
        <div className="contact_container">
            <div className="contact">
                <div className="contact_info">
                    <div className="contact_header">
                        <h1>{text[locale].contactInfo}</h1>
                    </div>
                    {hcontact.map((contact, index) => {
                        return (
                            <div key={index} className="contact_details">
                                <p className="contact_details_title">{contact?.name}</p>
                                <p className="contact_details_body">
                                    <span>Email: </span>
                                    {contact?.email}
                                </p>
                                <p className="contact_details_body">
                                    <span>{text[locale]?.phone}: </span>
                                    {contact?.phoneNumber}
                                </p>
                                <p className="contact_details_body">
                                    <span> {text[locale]?.phone}: </span>
                                    {contact?.mobileNumber}
                                </p>
                            </div>
                        )
                    })}
                    <div className="contact_details">
                        <div className="contact_logo">
                            <Image src="/logovillas.png" alt="logovillas" width={150} height={80} />
                        </div>
                    </div>
                </div>
                <div className="contact_maps">
                    <Map location={location} height={'700px'} />
                </div>
            </div>
        </div>
    )
}


export default Page;