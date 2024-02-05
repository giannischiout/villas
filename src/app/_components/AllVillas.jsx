import Image from 'next/image';

const AllVillas = ({description, title}) => {
  
    return (
        <div className="allvillas_container ">
            <div className="allvillas_inner">
                <p className="allvillas_header">EXPLORE MORE</p>
                <Villa description={description} title={title} justify="flex-start"  />
                {/* <Villa description={description} title={title} justify="flex-end" /> */}
            </div>
        </div>
    )
}



const Villa = ({description, title, justify}) => {
  
    return (
        <div className="single_villa" style={{justifyContent: justify,}}>
            <div className=''>
                <div className="villa_img">
                    <Image src="/1.webp" alt="villa" fill />
                </div>
                <div className='single_villa_description' >
                    <h3>{title}</h3>
                   <p>
                   {description}
                   </p>
                   <div>
                          <button>Book now</button>
                   </div>
                </div>
            </div>
        </div>
    )
}


export default AllVillas;