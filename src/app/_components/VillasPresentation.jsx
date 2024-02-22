'use client'
import { useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { BookNow } from "./Navbar"
import { useRouter } from "next/navigation"
import Book from "./Button"
import { Btn } from "./Button"
import BookCircle from "./BookCircle"
const VillasPresentation = ({ villas }) => {
    console.log(villas)
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

                            <Card
                                id={0}
                                name={villas[0].title}
                                image="pres_castro.webp"
                                people={villas[0].details.maxAduls}
                                sqr={villas[0].details.squareMeters}
                                bedrooms={villas[0].details.bedrooms}
                                pullOutCouch={villas[0].details.pullOutCouch}
                                href=""
                            />
                        </div>
                        <div className="card2">
                            <Card
                                image="pres_jira.webp"
                                
                                name={villas[1].title}
                                people={villas[1].details.maxAduls}
                                sqr={villas[1].details.squareMeters}
                                bedrooms={villas[1].details.bedrooms}
                                pullOutCouch={villas[1].details.pullOutCouch}
                            />
                        </div>
                        <div className="card3">
                            <Card 
                                id={2} 
                                image="pres_milos.webp" 
                                name={villas[2].title}
                                people={villas[2].details.maxAduls}
                                sqr={villas[2].details.squareMeters}
                                bedrooms={villas[2].details.bedrooms}
                                pullOutCouch={villas[2].details.pullOutCouch}
                                />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}


const Card = ({ image, people, sqr, name, id, bedrooms, pullOutCouch }) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`/villas/${id}`)
    }
    return (
        <div className="villas_card_container">
            <div className="v_presentation_card_image_container">
                <Image src={`/${image}`} alt="villa1" fill={true} sizes={"(max-width: 800px) 90%"} />

            </div>
            <div className="v_presentation_card_text">
                <div className="">
                    <span className="v_card_title">{name}</span>
                    <p>{`Max Adults: ${people}`}</p>
                    <p>{`Square Meters ${sqr}`}</p>
                    <p>{`bedrooms ${bedrooms}`}</p>
                    <p>{`Pullout Couch ${pullOutCouch}`}</p>
                </div>
                <Btn text="see more" onClick={onClick} />

            </div>
        </div>
    )
}



export default VillasPresentation