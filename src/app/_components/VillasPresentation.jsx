'use client'
import { useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { BookNow } from "./Navbar"
import { useRouter } from "next/navigation"
import Book from "./Button"
import { Btn } from "./Button"
const VillasPresentation = ({
    id
}) => {

    return (
        <section>
            <div className="v_presentation_container">
                <div className="v_presentation_inner">
                    {/* <div className="presentation_top_container">
                        <div className="v_presentation_top">
                            <div >
                                <p>OUR</p>
                                <h5>VILLAS</h5>
                            </div>
                            <div >
                                <div className="v_presentation_image_container">
                                    <Image src={'/1.webp'} alt="villa1" fill={true} />
                                </div>
                                <div>
                                    <p>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="v_presentation_sticky">
                        <div className="presentation_bottom_container">
                            <div className="v_presentation_bottom">
                                <div>
                                    <h6>Villas</h6>
                                    <p>
                                    Ionian Dream Villas in Lefkada: Your Perfect Island Getaway
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="v_presentation_villas">
                        <div className="v_presentation_villas_inner">
                            <div>
                                {id =="castro" ? (
                                   null
                                ) : (
                                    <Card 
                                    name="Castro" 
                                    image="pres_castro.webp" 
                                    people={9} 
                                    sqr="140"
                                    href=""
                                />
                                )}
                                {id=="jira"  ? null : <Card  name="Jira" image="pres_jira.webp" people={9} sqr="140" />}
                                {id=="milos" ? null : <Card  name="Milos" image="pres_milos.webp" people={9} sqr="140"/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


const Card = ({ image, people, sqr, name }) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`villas/${name.toLowerCase()}`)
    }
    return (
        <div className="villas_card_container">
            <div className="v_presentation_card_image_container">
                <Image src={`/${image}`} alt="villa1" fill={true} sizes={"(max-width: 800px) 90%"}/>

            </div>
            <div className="v_presentation_card_text">
                <div className="">
                    <span className="v_card_title">{name}</span>
                    <p>{`${people} people`}</p>
                    <p>{`${sqr}`}</p>
                </div>
                <Btn text="see more"  onClick={onClick}/>

            </div>
        </div>
    )
}



export default VillasPresentation