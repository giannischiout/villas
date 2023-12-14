'use client'
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { useAnimate, useScroll, useTransform } from 'framer-motion';
import useLocoScroll from '@/app/_hooks/useLocoScroll';

const features = [
    { feature: "separate bath & shower" },
    { feature: "bang&olufsen flat screen tv" },
    { feature: "apple tv" },
    { feature: "dvd player" },
    { feature: "electronic room control touch panel" },
    { feature: "apple iPad" },
    { feature: "wi-fi internet connection" },
]

const Features = () => {
    return (
        <ul>
            {features.map((item, index) => {
                return (
                    <li key={index}>
                        <p>{item.feature}</p>
                    </li>
                )
            })}
        </ul>
    )
}




const Page = () => {
    const scrollRef= useRef(null)
    const [locomotiveRef] = useLocoScroll({
        ref: scrollRef,
        smooth: true,
        class: 'is-reveal'
    })
   
    return (
        <div ref={scrollRef} id="loco_container"  className='villa_container' data-scroll-container >
            <div className="villa_top" data-scroll-section>
                <div className="v_sidebar">
                    <div className='v_sidebar_top'>
                        <p>Jira</p>
                    </div>
                    <div className='v_sidebar_img_container'>
                        <Image
                            src="/1.webp"
                            fill={true}
                        />
                    </div>
                </div>
                <div className="v_main">
                    <div className='v_main_top'>
                        <div>
                            <h1>Location</h1>
                            <h2>AN OASIS OF PIECE AND QUIET</h2>
                        </div>
                    </div>
                        <ImageScroll  />
                    <div className="v_main_content" data-scroll data-scroll-speed="0.4">
                        <h3  >Barefoot luxury, elevated.</h3>
                        <p  >
                            Located on our top floor with unparalleled panoramic views, The Angelina Suite
                            is the ultimate emblem of our esteemed luxury, service, and style. Our namesake suite
                            offers 60 square-meters (645 square feet) of tranquility, an all-white refuge stunningly
                            contrasted against the kaleidoscope of color in the surrounding landscape. Guests can bask
                            in the sun or dine al fresco on their private 30 square meter (323 square foot) terrace
                            and unwind in the oversized,
                            Phillip Starck designed bathroom, complete with separate shower and bathtub.
                        </p>
                        <h4>Room Features</h4>
                        <Features />
                    </div>
                </div>
            </div>
            <div className='h-screen w-full bg-red-200' data-scroll-section></div>
        </div>
    )
}





const ImageScroll = () => {
    
    const { scrollYProgress } = useScroll();
    const [scope, animate] = useAnimate();


    useEffect(() => {
        scrollYProgress.on("change", (v) => {
            // const initialInset = { top: 5, right: 10, bottom: 0, left: 12 };
            // let scroll = v * 3.3;
            // const newInset = `inset(${initialInset.top - (initialInset.top * scroll)}% ${initialInset.right - (initialInset.right * scroll)}% ${initialInset.bottom - (initialInset.bottom * scroll)}% ${initialInset.left - (initialInset.left * scroll)}%)`;
            // animate(scope.current, {
            //     clipPath: newInset
            // }, {
            //     ease: "linear",
            //     duration: 0.5
            // })
            if(v < 0.1) 
            animate(scope.current, {
                clipaPath: ["inset(3% 10% 0% 12%)", "inset(0% 0% 0% 0%)"]
            }, {
                ease: "linear",
                duration: 0.5
            })
        })
    }, [scrollYProgress])

    return (
        <div ref={scope} className='v_main_image_container'>
            <Image
                src="/1.webp"
                fill={true}
            />
        </div>
    );
}

export default Page;