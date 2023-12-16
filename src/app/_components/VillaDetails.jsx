'use client'

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useAnimate, useTransform, useScroll, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { IoIosArrowForward } from "react-icons/io";

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




export function VillaFacilities() {
    const targetRef = useRef(null);
    const [ref, inView] = useInView();
    const [scope, animate] = useAnimate();
    const [active, setActive] = useState(0)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "center"]
    });


    

    const onMouseEnter = (index) => {
        setActive(index)
    }
    return (
        <div ref={ref} className="parallax_wrapper"  >
            <div ref={scope} className="v_facilities_wrapper" >
                <div className="v_facilities_inner">
                    <div>
                        <p>VIEWS</p>
                        <ul>
                            {views.map((item, index) => {
                                return (
                                    <li className={active === index && 'views_active'} onMouseEnter={() => onMouseEnter(index)} key={index}>
                                        <span>{item}</span>
                                        {active === index && <IoIosArrowForward />}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="v_facilites_content"> 
                        <div>
                            <Image 
                            src={`/views/${active + 1}.webp`}
                            fill={true}
                            sizes="200px"
                            />
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}



