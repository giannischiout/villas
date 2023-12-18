'use client'

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useAnimate, useTransform, useScroll, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { IoIosArrowForward } from "react-icons/io";
import AnimatedText from "./AnimatedText"
const facilities = [
    'Safety Deposit Box',
    'Storage Room',
    'SAT-TV',
    'Toaster',
    'Washing Machine'
]
const views = [
    'Garden View',
    'Pool View',
    'Sea View ',
    'Sunset View',

]

const details = {
    maxAdults: 6,
    maxChildren: 3,
    bedrooms: 3,
    pullOutCoutch: 1,
    squareMeters: 200,
    bathRooms: '2 bathrooms, bathtub or shower / WC',
    guestToilet: '1 guest toilet',
}

const roomTypes = [
    'Gallery Couch ',
    'Master Bedroom',
    'Gallery Double Room'

]




export function VillaDetails() {
    return (
        <>
            <h4 >Details</h4>
            <ul>
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



export function VillaFeatures() {
    const [data, setData] = useState(roomTypes)
    return (
        <>
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
        </>
    )
}





export function VillaFacilities({ image }) {
    console.log(image)
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
                            <p> 645 square foot</p>
                        </div>
                        <div>
                            <span>Outdoor Space</span>
                            <p>645 square foot</p>
                        </div>
                        <div>
                            <span>Views</span>
                            <p>garden</p>
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
                        <motion.img
                            src={image}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}




