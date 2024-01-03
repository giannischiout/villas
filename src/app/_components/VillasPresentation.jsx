import { useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { BookNow } from "./Navbar"

const VillasPresentation = () => {
    
    return (
        <section>
            <div className="v_presentation_container">
                <div className="v_presentation_inner">
                    <div className="presentation_top_container">
                        <div className="v_presentation_top">
                            <div >
                                <p>OUR</p>
                                <h5>VILLAS</h5>
                            </div>
                            <div >
                                <div className="v_presentation_image_container">
                                    <Image src={'/1.webp'} alt="villa1" fill={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="v_presentation_sticky">
                        <div className="presentation_bottom_container">
                            <div className="v_presentation_bottom">
                                <div></div>
                                <div>
                                    <h6>TRANQULITY</h6>
                                    <p>
                                        Fine dining, Amalfi style.
                                        At Casa Angelina, the rich flavors and ingredients of
                                        Campania inspire every.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="v_presentation_villas">
                            <div className="v_presentation_villas_inner">
                                <div>
                                    <Card />
                                    <Card />
                                    <Card />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}


const Card = ({image, text}) => {
    return (
        <div className="villas_card_container">
            <div className="v_presentation_card_image_container">
                <Image src={'/1.webp'} alt="villa1" fill={true} />
            </div>
            <div className="v_presentation_card_text">
               <div className="">
               <span className="v_card_title">VILLA MILOS</span>
                <p>8 People</p>
                <p>140 sqm</p>
               </div>
               <BookNow text="see more"/>
               
            </div>
        </div>
    )
}


const ButtonVilla = ({children}) => {
    return (
        <button className="villa_btn">
           {children}
        </button>
    )
}
export default VillasPresentation