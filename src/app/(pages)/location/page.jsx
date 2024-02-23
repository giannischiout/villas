
import { GoArrowUpRight } from "react-icons/go";
import MapLink from "@/app/_components/MapLink";
const Page = () => {

   
    return (
        <div className="location_container">
            <div className="location_inner">

                <div className="location_maps">
                    <div>
                        <p>GOOGLE</p>
                        <p>MAPS</p>
                        <MapLink />
                    </div>
                    {/* <div className="location_coordinates">
                        <p>GPS COORDINATES</p>
                        <p>{`40° 36’ 43,56’’ N / 14° 31’ 55,92’’ E`}</p>
                    </div> */}
                </div>
                <div className="location_photo"></div>

            </div>

        </div>
    )
}


export default Page;



