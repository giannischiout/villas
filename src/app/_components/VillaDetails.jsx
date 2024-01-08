'use client'
import { ClipImage } from "./ClipImage"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useAnimate, useTransform, useScroll, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { IoIosArrowForward } from "react-icons/io";
import AnimatedText from "./AnimatedText"

const views = [
    'Garden View',
    'Pool View',
    'Sea View ',
    'Sunset View',

]








export function VillaDetails({details}) {
    return (
        <>
            <h4 >Details</h4>
            <ul className="v_para">
                <li>
                    Square meters:
                    <span className="v_details"> {details.squareMeters}</span>
                </li>
                <li>
                    Max adults:
                    <span className="v_details"> {details.maxAdults}</span>
                </li>
                <li>
                    Max children:
                    <span className="v_details"> {details.maxChildren}</span>
                </li>
                <li>
                    Bedrooms:
                    <span className="v_details"> {details.bedrooms}</span>
                </li>
                <li>
                    Bathrooms:
                    <span className="v_details"> {details.bathRooms}</span>
                </li>
                <li>
                    Guest Toilet:
                    <span className="v_details"> {details.guestToilet}</span>
                </li>
            </ul>
        </>
    )
}



export function VillaFeatures({roomTypes}) {
    const [data, setData] = useState(roomTypes)
    return (
        <div className="v_para"> 
            <h5>Room Features</h5>
            <ul>
                {data.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}





export function VillaFacilities({ image, facilities, interiorSqr, outdoorSqr }) {
    const clipRef = useRef(null);
    const targetRef = useRef(null);
    const [ref, inView, entry] = useInView({
        threshold: 0.5,
        triggerOnce: false
    });
 
    const { scrollYProgress, scrollY } = useScroll({
        target: targetRef,
        offset: ["start end", "center"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 20],);
    const variants = {
        visible: { y: y },
        hidden: {
        }
    };
    return (
        <div className="parallax_wrapper"  >
            <div className="v_spaces" >
                <div className="v_spaces_inner">
                    <div className="v_spaces_header">
                        <AnimatedText text="SPACES" />
                    </div>
                    <div className="v_spaces_content">
                        <div>
                            <span>Interior Space</span>
                            <p>{`${interiorSqr}sqm`}</p>
                        </div>
                        <div>
                            <span>Outdoor Space</span>
                            <p>{`${outdoorSqr}sqm`}</p>
                        </div>
                        <div>
                            <span>Views</span>
                            <p>garden, pool, sea</p>
                        </div>
                        

                    </div>
                </div>
            </div>
            <div className="v_facilities">
                <div className="facilities_header">
                    <span>
                        Room facilites
                    </span>
                </div>
                <div className="facilities_content">
                    <ul>
                        {facilities.map((item, index) => {
                            return (
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <motion.div
                    animate={inView ? 'visible' : 'hidden'}
                    variants={variants}
                    transition={{ duration: 2, ease: 'easeOut' }}
                    ref={ref} className="facilities_image">
                    <div>
                        <ClipImage img={image} forwardRef={clipRef} duration={0.5} />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}




