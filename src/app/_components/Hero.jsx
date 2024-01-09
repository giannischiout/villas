'use client'
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { useAnimate, useScroll, animate, useAnimation, useInView, motion } from 'framer-motion';
import { ClipImage } from "./ClipImage";
import { ImageScroll } from './Villa';
import  LetterFade  from './LetterFade';
const Hero = ({ children, sidebarImg, mainImg, tag, name }) => {
    const { scrollYProgress } = useScroll();
    const [scope, animate] = useAnimate();
    const clipRef = useRef(null);
    const isInView = useInView(scope);


    useEffect(() => {

    }, [])
    const handleIntroAnimation = async () => {
        animate('.v_main_image_container_inner', {
            opacity: [0, 1]
        }, {
            duration: 0.4,
            ease: 'easeIn'
        })
        animate('.intro_sidebar', {
            opacity: [0.6, 1],
            y: ['1000px', '0px'],

        }, {
            duration: 0.4,
            ease: [0.6, 0.01, 0.05, 0.9]
        })
        await animate('.hero_main_top', {
            opacity: [0, 1],
            y: ['30%', '0%'],

        }, {
            duration: 1,
            ease: 'easeInOut'
        })
    }
    useEffect(() => {
        handleIntroAnimation()
    }, [])


    useEffect(() => {
        scrollYProgress.on("change", (v) => {
            const initialInset = { top: 2, right: 10, bottom: 0, left: 12 };
            let scroll = v * 30;
            const newInset = `inset(${initialInset.top - (initialInset.top * scroll)}% ${initialInset.right - (initialInset.right * scroll)}% ${initialInset.bottom - (initialInset.bottom * scroll)}% ${initialInset.left - (initialInset.left * scroll)}%)`;
            animate('.v_main_image_container_inner', {
                clipPath: newInset
            }, {
                ease: "linear",
                duration: 0.4
            })

        })
    }, [scrollYProgress])
    return (
       <div className="villa_container">
         <div ref={scope} className="villa_top" >
            <div className="v_sidebar_space"></div>
            <div className="intro_sidebar">
                <div className='v_sidebar_img_container'>
                <Image src={'/1.webp'} fill={true} sizes="300px" />
                </div>
            </div>
            <div className="v_main">
                <div className='hero_main_top'>
                    <div>
                        <LetterFade word={'IONIAN DREAM VILLAS'} style='hero_title' />
                        <h2>AGIOS IOANNIS</h2>
                    </div>
                </div>
                <div className='v_main_image_container'  >
                    <ImageScroll image={'/intro_day.webp'} />
                </div>
                <div className="intro_text" >
                    <h3>Beautiful quiet villas with private pool</h3>
                    <p>Ionian Dream Villas, a charming hotel located in Lefkada 
                        near the captivating Agios Ioannis Bay, presents an 
                        array of three villas, characterized by their 
                        understated yet elegant architectural design. 
                        Set amidst a backdrop of vibrant greenery and exotic flora, 
                        our villas offer a tranquil oasis for your stay on this 
                        enchanting Greek island.
                    </p>
                    <p>With each villa, you'll be treated to a marvelous view of the bay, a breathtaking sight that will enchant your senses. Immerse yourself in the natural beauty that surrounds Ionian Dream Villas, as you soak in the serenity and tranquility of the lush landscape.
                    </p>
                    <p>Experience the perfect blend of comfort, nature, and captivating views during your stay at Ionian Dream Villas in Lefkada. Book your getaway today and indulge in the beauty of Agios Ioannis Bay.</p>
                </div>

            </div>
        </div>
       </div>
    )
}

export default Hero;