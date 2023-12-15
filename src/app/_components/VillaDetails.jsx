'use client'

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useAnimate, useTransform, useScroll, motion } from "framer-motion"

const facilities = [
    'Safety Deposit Box',
    'Storage Room',
    'SAT-TV',
    'Toaster',
    'Washing Machine'


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
    const [scope, animate]= useAnimate();
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 0.1], ['0', '10%'])

    

    useEffect(() => {
        
        
        scrollYProgress.on("change", (v) => {
            console.log(v)
            animate(scope.current, {
                y: -(v * 300)
            })
        })
    }, [scrollYProgress])

    return (
        <div ref={targetRef} className="parallax_wrapper"  >
            <div ref={scope} className="v_facilites_wrapper" >
                <div className="v_facilites_views">
                    <div></div>
                </div>
                <div className="v_facilites_header">
                    <h6>ROOM FACILITIES</h6>
                </div>
                <div 
            
                className="v_facilites_content">
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
                <div className="v_facilites_image">
                    <div>
                        <Image
                            src="/1.webp"
                            fill={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}



