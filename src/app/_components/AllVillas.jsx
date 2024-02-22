import Image from 'next/image';
import BookCircle from './BookCircle';
import { redirect } from 'next/navigation'
import { Villa, VillaRight } from './SingleVIllaCard';
const AllVillas = ({ data, hasDetails = false }) => {
    return (
        <div className="allvillas_container ">
            <div className="allvillas_inner">
                <Villa description={data[0]?.description} title={data[0]?.title} details={data[0]?.details} hasDetails={hasDetails} id={data[0].id}  />
                <VillaRight description={data[1]?.description} title={data[1]?.title} details={data[1]?.details}  hasDetails={hasDetails} id={data[1].id} />
                {data[2] ?
                    (
                        <Villa description={data[3]?.description} title={data[3]?.title} details={data[2]?.details}  hasDetails={hasDetails} id={data[2].id}/>
                    ) : null}
            </div>
        </div>
    )
}






export default AllVillas;