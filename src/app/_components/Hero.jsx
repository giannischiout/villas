'use client'
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { useAnimate, useScroll, animate, useAnimation, useInView, motion } from 'framer-motion';
import { ClipImage } from "./ClipImage";
// import { ImageScroll } from './Villa';
import LetterFade from './LetterFade';
import SlideShow from './SlideShow';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = [
    '/slider/1.webp',
    '/slider/2.webp',
    '/slider/3.webp',
    '/slider/4.webp',
    '/slider/5.webp',
    '/slider/6.webp',
    '/slider/7.webp',
    '/slider/8.webp',
    '/slider/9.webp',
    '/slider/10.webp',
    '/slider/11.webp',
    '/slider/12.webp',
    '/slider/13.webp',
    '/slider/14.webp',
]


const Hero = ({ children, sidebarImg, mainImg, tag, name }) => {
    const { scrollYProgress } = useScroll();
    const [scope, animate] = useAnimate();
    const clipRef = useRef(null);
    const isInView = useInView(scope);
    const [current, setCurrent] = useState(0);

    const prevImage = () => {
        setCurrent(prev => (prev + 1) % images.length)
    }

    const nextImage = () => {
        setCurrent(prev => (prev - 1 + images.length) % images.length)
    }

    const handleIntroAnimation = async () => {

        animate('.intro_sidebar', {
            opacity: [0.6, 1],
            y: ['1000px', '0px'],

        }, {
            duration: 0.4,
            ease: [0.6, 0.01, 0.05, 0.9]
        })
        await animate('.v_main_image_container', {
            opacity: [0, 1],
        }, {
            duration: 1,
            ease: 'easeInOut'
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
                        <div className='v_main_image_container_inner' >
                            <Image
                                alt="an image of the interior of the ioannian villa"
                                src={images[current]}
                                sizes={'100%'}
                                fill={true}
                            />
                            <div className='hero_slider_buttons'>
                                <button  onClick={prevImage}>
                                    <IoIosArrowBack />
                                </button>
                                <button onClick={nextImage}>
                                    <IoIosArrowForward />
                                </button>
                            </div>
                          
                        </div>
                        {/* <ImageScroll image={'/intro_day.webp'} /> */}
                    </div>
                    <div className="intro_text" >
                        <h3>BEAUTIFUL QUIET VILLAS WITH PRIVATE POOL</h3>
                        <p>{`Ionian Dream Villas, a charming hotel located in Lefkada 
                        near the captivating Agios Ioannis Bay, presents an 
                        array of three villas, characterized by their 
                        understated yet elegant architectural design. 
                        Set amidst a backdrop of vibrant greenery and exotic flora, 
                        our villas offer a tranquil oasis for your stay on this 
                        enchanting Greek island.`}
                        </p>
                        <p>{`With each villa, you'll be treated to a marvelous view of the bay, a breathtaking sight that will enchant your senses. Immerse yourself in the natural beauty that surrounds Ionian Dream Villas, as you soak in the serenity and tranquility of the lush landscape.`}
                        </p>
                        <p>Experience the perfect blend of comfort, nature, and captivating views during your stay at Ionian Dream Villas in Lefkada. Book your getaway today and indulge in the beauty of Agios Ioannis Bay.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero;