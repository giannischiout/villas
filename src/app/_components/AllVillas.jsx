import Image from 'next/image';
import BookCircle from './BookCircle';
const AllVillas = ({ data, hasDetails = false }) => {
    console.log('do i get the details here?')
    console.log(data[0]?.details)
    return (
        <div className="allvillas_container ">
            <div className="allvillas_inner">
                <Villa description={data[0]?.description} title={data[0]?.title} details={data[0].details} />
                <VillaRight description={data[1]?.description} title={data[1]?.title} details={data[1].details} />
                {data[2] ?
                    (
                        <Villa description={data[3]?.description} title={data[3]?.title} details={data[2].details} />
                    ) : null}
            </div>
        </div>
    )
}



const Villa = ({ description, title, details }) => {
    console.log(details)
    return (
        <div className="single_villa_item">
            <div className='sv_column_1'>
                <Image src="/1.webp" alt="villa" fill />
                <div className='allvillas_details'>
                    <div>
                        <p>{details['maxAduls']}</p>
                        <span>{'Max Adults'}</span>
                    </div>
                    <div>
                        <p>{details['bedrooms']}</p>
                        <span>{'Bedrooms'}</span>
                    </div>
                    <div>
                        <p>{details['maxChildren']}</p>
                        <span>{'Max Children'}</span>
                    </div>
                    <div>
                        <p>{details['squareMeters']}</p>
                        <span>{'Square Meters'}</span>
                    </div>
                    <div>
                        <p>{details['pullOutCouch']}</p>
                        <span>{'Pull Out Couch'}</span>
                    </div>
                </div>
            </div>

            <div className='sv_column_2'>
                <h3 className='sv_card_header'>{title}</h3>
                <p className='sv_card_para'>
                {description ? description : 'No content found'}
                </p>
                <div className='sv_booknow_container'>
                    <BookCircle />
                </div>
            </div>
        </div>
    )
}

const VillaRight = ({ description, title, details }) => {

    return (
        <div className="single_villa_item_right">
            <div className='sv_right_col_1'>
                <h3 className='sv_card_header'>{title}</h3>
                <p className='sv_card_para'>
                    {description ? description : 'No content found'}
                </p>
                <div className='sv_booknow_container'>
                    <BookCircle />
                </div>
            </div>
            <div className='sv_right_col_2'>
                <Image src="/1.webp" alt="villa" fill />
                <div className='allvillas_details_right'>
                    <div>
                        <p>{details['maxAduls']}</p>
                        <span>{'Max Adults'}</span>
                    </div>
                    <div>
                        <p>{details['bedrooms']}</p>
                        <span>{'Bedrooms'}</span>
                    </div>
                    <div>
                        <p>{details['maxChildren']}</p>
                        <span>{'Max Children'}</span>
                    </div>
                    <div>
                        <p>{details['squareMeters']}</p>
                        <span>{'Square Meters'}</span>
                    </div>
                    <div>
                        <p>{details['pullOutCouch']}</p>
                        <span>{'Pull Out Couch'}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default AllVillas;