import Image from "next/image"

const StickyShow = () => {
    return (
        <div className="sticky_show_container">
            <div className="sticky_show_grid">
                <div  className="sticky_show_content">
                    <Card image={'/4.webp'} title={'villa mosco'} subTitle={'tranquility'} />
                    <Card image={'/10.webp'} title={'villa mosco'} subTitle={'tranquility'} />
                </div>
                <div className="sticky_show_header">
                    <p>more villas</p>
                </div>
            </div>
        </div>
    )
}



const Card  = ({image, title, subTitle}) => {
    return (
        <div className="sticky_show_card">
            <div className="sticky_show_card_image">
                <Image 
                    alt='villa image'
                    src={image}
                    fill={true}
                />
            </div>
            <div className="sticky_show_card_details">
                <p>{title}</p>
                <span>{subTitle}</span>
            </div>
        </div>
    )
}
export default StickyShow;