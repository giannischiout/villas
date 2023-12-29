'use client'
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

import { useTransform, useScroll, motion, useAnimate } from "framer-motion";
import { useRef } from "react";


const Test = () => {
    const [scope, animate] = useAnimate()
    const ref = useRef()
    const { scrollYProgress } = useScroll()

    useEffect(() => {


        scrollYProgress.on("change", (v) => {
            console.log(v)
                animate('.test_text', {
                    transform: `translateY(${v * 300}px)`
                }, {
                    duration: 1,
                    ease: "easeInOut"
                })
        })


    }, [])

    return (
        <>
            <div className="h-[100vh] w-full"></div>
            <div ref={scope} className="test_container">
                <div className="test_text">
                  
                </div>
                <div className="test_image">
                    <div>
                        <Image
                            src={'/3.webp'}
                            fill={true}
                        />
                    </div>
                </div>
            </div>
            <div className="h-[100vh] w-full bg-slate-300"></div>
        </>
    )
}

export default Test;