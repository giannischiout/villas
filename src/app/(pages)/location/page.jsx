
import { GoArrowUpRight } from "react-icons/go";

const Page = () => {
    return (
        <div className="location_container">
            <div className="location_inner">

                <div className="location_maps">
                    <div>
                        <p>GOOGLE</p>
                        <p>MAPS</p>
                        <button className="maps_button">
                        view
                        <GoArrowUpRight />
                        </button>
                    </div>
                    <div className="location_coordinates">
                <p>GPS COORDINATES</p>
                <p>{`40° 36’ 43,56’’ N / 14° 31’ 55,92’’ E`}</p>
            </div>
                </div>
                <div className="location_photo"></div>
              
            </div>
           
        </div>
    )
}


export default Page;