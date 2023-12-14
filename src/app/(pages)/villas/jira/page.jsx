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
    })
   
    return (
        <div    className='villa_container' >
            <div className="villa_top" >
                <div className="v_sidebar">
                    <div className='v_sidebar_top'>
                        <p>Jira</p>
                    </div>
                    <div className='v_sidebar_img_container' >
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
                    <div className='v_main_image_container'>
                    <ImageScroll  />
                    </div>
                    <div className="v_main_content" >
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
            <div className='h-screen w-full bg-red-200' ></div>
        </div>
    )
}





const ImageScroll = () => {
    
    const { scrollYProgress } = useScroll();
    const [scope, animate] = useAnimate();
    const [fired, setFired] = useState(false);

    useEffect(() => {

       
        scrollYProgress.on("change", (v) => {
            console.log(v)
            const initialInset = { top: 2, right: 10, bottom: 0, left: 12 };
            let scroll = v * 6;
            const newInset = `inset(${initialInset.top - (initialInset.top * scroll)}% ${initialInset.right - (initialInset.right * scroll)}% ${initialInset.bottom - (initialInset.bottom * scroll)}% ${initialInset.left - (initialInset.left * scroll)}%)`;
            animate(scope.current, {
                clipPath: newInset
            }, {
                ease: "linear",
                duration: 0.4
            })

         
        })
    }, [scrollYProgress])

    return (
        <div  ref={scope} className='v_main_image_container_inner' >
            <Image
                src="/1.webp"
                fill={true}
            />
        </div>
    );
}

export default Page;