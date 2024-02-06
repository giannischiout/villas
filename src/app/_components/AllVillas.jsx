import Image from 'next/image';

const AllVillas = ({ description, title }) => {

    return (
        <div className="allvillas_container ">
            <div className="allvillas_inner">
                <p className="allvillas_header">EXPLORE MORE</p>
                <Villa description={description} title={title} />
                <VillaRight description={description} title={title} />
            </div>
        </div>
    )
}



const Villa = ({ description, title, justify }) => {

    return (
        <div className=" single_villa_item">
            <div className='sv_column_1'>
                <Image src="/1.webp" alt="villa" fill />
            </div>
            <div className='sv_column_2'>
                <h3 className='sv_card_header'>{title}</h3>
                <p className='sv_card_para'>
                    {description}
                </p>
                <div className='sv_booknow_container'>
                    <button className='sv_book_now'>Book now</button>
                </div>
            </div>
        </div>
    )
}
const VillaRight = ({ description, title, justify }) => {

    return (
        <div className="single_villa_item_right">
              <div className='sv_right_col_1'>
                <h3 className='sv_card_header'>{title}</h3>
                <p className='sv_card_para'>
                    {description}
                </p>
                <div className='sv_booknow_container'>
                    <button className='sv_book_now'>Book now</button>
                </div>
            </div>
            <div  className='sv_right_col_2'>
                <Image src="/1.webp" alt="villa" fill />
            </div>
          
        </div>
    )
}



export default AllVillas;