import Map from "@/app/_components/Map";
import Image from 'next/image';
const Page = () => {
    const location = {
        lat: 37.7749, // Replace with your desired latitude
        lng: -122.4194, // Replace with your desired longitude
      };

    return (
        <div className="contact_container">
            <div className="contact">
                <div className="contact_info">
                   <div className="contact_header">
                   <h1>CONTACT INFORMATION</h1>
                   </div>
                    <div className="contact_details">
                        <p className="contact_details_title">OFFICE</p>
                        <p className="contact_details_body">
                            <span>Email: </span>
                            maria@ionian-dream-villas.com
                        </p>
                        <p className="contact_details_body">
                            <span>Phone: </span>
                            +30 26450 26111
                        </p>
                        <p className="contact_details_body">
                            <span>Mobile: </span>
                            +30 69 32637171
                        </p>
                    </div>
                    <div className="contact_details">
                        <p className="contact_details_title">{`CONTACT & BOOKING`}</p>
                        <p className="contact_details_body">
                            <span>Email: </span>
                            maria@ionian-dream-villas.com
                        </p>
                        <p className="contact_details_body">
                            <span>Phone: </span>
                            +30 26450 26111
                        </p>
                    </div>
                    <div className="contact_details">
                        <p className="contact_details_title">{`GERMANY OFFICE`}</p>
                        <p className="contact_details_body">
                            <span>Email: </span>
                            maria@ionian-dream-villas.com
                        </p>
                        <p className="contact_details_body">
                            <span>Phone:</span>
                            +49 89 81302853
                        </p>
                        <p className="contact_details_body">
                            <span>Mobile:</span>
                            +49 172 6162438
                        </p>
                        <div className="contact_logo">
                            <Image src="/logovillas.png" alt="logovillas" width={150} height={80} />
                        </div>
                    </div>
                </div>
                <div className="contact_maps">
                    <Map location={location} height={'700px'}/>
                </div>
            </div>
        </div>
    )
}


export default Page;