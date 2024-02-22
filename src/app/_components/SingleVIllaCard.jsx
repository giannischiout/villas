'use client'
import Image from 'next/image';
import BookCircle from './BookCircle';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export const Villa = ({ description, title, details, hasDetails, id }) => {
    
    const router = useRouter();
    return (
        <div className="single_villa_item">
            <div  className='sv_column_1'>
                <Image src="/1.webp" alt="villa" fill />
                {hasDetails ? (
                    <div className='allvillas_details'>
                    <div>
                        <p>{details?.maxAduls}</p>
                        <span>{'Max Adults'}</span>
                    </div>
                    <div>
                        <p>{details?.bedrooms}</p>
                        <span>{'Bedrooms'}</span>
                    </div>
                    <div>
                        <p>{details?.squareMeters}</p>
                        <span>{'Square Meters'}</span>
                    </div>
                    <div>
                        <p>{details?.pullOutCouch}</p>
                        <span>{'Pull Out Couch'}</span>
                    </div>
                </div>
                ) : null}
            </div>

            <Link href={`/villas/${id}`} className='sv_column_2'>
                <h3 className='sv_card_header'>{title}</h3>
                <p className='sv_card_para'>
                {description ? description : 'No content found'}
                </p>
                <div className='sv_booknow_container'>
                    <BookCircle />
                </div>
            </Link >
        </div>
    )
}

export const VillaRight = ({ description, title, details, hasDetails, id }) => {
    const router = useRouter();
    return (
        <div className="single_villa_item_right">
            <div onClick={() => router.push(`/villas/${id}`)} className='sv_right_col_1'>
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
                {hasDetails ? (
                      <div className='allvillas_details_right'>
                      <div>
                          <p>{details?.maxAduls}</p>
                          <span>{'Max Adults'}</span>
                      </div>
                      <div>
                          <p>{details?.bedrooms}</p>
                          <span>{'Bedrooms'}</span>
                      </div>
                      <div>
                          <p>{details?.squareMeters}</p>
                          <span>{'Square Meters'}</span>
                      </div>
                      <div>
                          <p>{details?.pullOutCouch}</p>
                          <span>{'Pull Out Couch'}</span>
                      </div>
                  </div>
                ) : null}
            </div>

        </div>
    )
}
