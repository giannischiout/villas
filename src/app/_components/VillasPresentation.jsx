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
                    <div className="v_presentation_sticky">
                        <div className="v_presentation_top">
                            <div className="v_presentation_header">
                                <span>CHOOSE ONE OF</span>
                                <p>OUR VILLAS</p>
                            </div>
                           
                        </div>
                     
                    </div>
                    <div className="v_presentations_villas">
                       <div className="card1">
                       {id =="castro" ? (
                                   null
                                ) : (
                                    <Card 
                                    id="v_presentation_villa_1"
                                    name="Castro" 
                                    image="pres_castro.webp" 
                                    people={9} 
                                    sqr="140"
                                    href=""
                                />
                                )}
                       </div>
                       <div className="card2">
                       {id=="jira"  ? null : <Card  name="Jira" image="pres_jira.webp" people={9} sqr="140" />}
                       </div>
                       <div className="card3">
                       {id=="milos" ? null : <Card  name="Milos" image="pres_milos.webp" people={9} sqr="140"/>}
                       </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}


const Card = ({ image, people, sqr, name, id }) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`/villas/${name.toLowerCase()}`)
    }
    return (
        <div  className="villas_card_container">
            <div className="v_presentation_card_image_container">
                <Image src={`/${image}`} alt="villa1" fill={true} sizes={"(max-width: 800px) 90%"} />

            </div>
            <div className="v_presentation_card_text">
                <div className="">
                    <span className="v_card_title">{name}</span>
                    <p>{`${people} people`}</p>
                    <p>{`${sqr}`}</p>
                </div>
                <Btn text="see more" onClick={onClick} />

            </div>
        </div>
    )
}



export default VillasPresentation