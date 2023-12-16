'use client'
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { useAnimate, useScroll, useTransform, useSpring, animate } from 'framer-motion';
import { VillaFeatures, VillaDetails, VillaFacilities } from './VillaDetails';
import { BookNow } from './Navbar';




const Villa = ({name,sidebarImg, mainImg, scrollImg }) => {
    const { scrollYProgress } = useScroll();
    const [scope, animate] = useAnimate();
    useEffect(() => {
        scrollYProgress.on("change", (v) => {
            const initialInset = { top: 2, right: 10, bottom: 0, left: 12 };
            let scroll = v * 6;
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
        <div  className='villa_container' 	 >
            <div ref={scope} className="villa_top" >
                <div className="v_sidebar_space"></div>
                <div className="v_sidebar">
                    <div className='v_sidebar_top'>
                        <p>{name}</p>
                    </div>
                    <div className='v_sidebar_img_container' >
                        <Image
                            src={sidebarImg}
                            fill={true}
                            sizes='100%'
                            priority={true}
                            alt={`an image of the ioannian villa named ${name} that depictes the living room`}
                        />
                    </div>
                </div>
                <div className="v_main">
                    <div className='v_main_top'>
                        <div>
                            <h1>{name.toUpperCase()}</h1>
                            <h2>AN OASIS OF PIECE AND QUIET</h2>
                        </div>
                    </div>
                    <div className='v_main_image_container'  >
                        <ImageScroll image={mainImg} />
                    </div>
                    <div className="v_main_content" >
                        <h3  >Barefoot luxury, elevated.</h3>
                        <p  >
                        This beautiful villa with a private pool is located in a quiet location, 
                        just a few minutes walk from the beach. The villa has three bedrooms, two bathrooms, a guest WC, a living room with an open, fully equipped kitchen, 
                        a dining and living area with an open fireplace, extending onto a 
                        large wooden deck terrace, and a workspace on the gallery.
                        </p>
                        < VillaDetails />
                        < VillaFeatures />
                    </div>
                </div>
            </div>
                <ScrollImageSticky image={scrollImg}/>

                {/* <VillaFacilities />
                <ImageSlider />
                <StickyShow /> */}
            <div className='h-screen w-full bg-red-200' ></div>
        </div>
    )
}



const ScrollImageSticky = ({image}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"]
    });

    
    
    useEffect(() => {
        scrollYProgress.on("change", (v) => {
            const scroll = (v ) * 15;
            animate('.sticky_img_container', {
                clipPath: `inset(${scroll}%)`
            }, {
                ease: "linear",
                duration: 0.2
            })
        })
    }, [])
    return (
        <div ref={ref} className='v_scroll_image'>
            {/* <div className="v_scroll_image_inner">
                <div className='sticky_img_container'>
                    <Image
                        alt='villa image'
                        src={image}
                        fill={true}
                    />
                </div>
            </div> */}
            <div className='v_scroll_image_inner'>
                <div className='sticky_img_container'>
                        <Image
                            alt='villa image'
                            src={image}
                            fill={true}
                        />
                </div>
            </div>
        </div>
    )
}


const ImageScroll = ({image}) => {

    return (
        <div className='v_main_image_container_inner' >
            <Image
                alt="an image of the interior of the ioannian villa"
                src={image}
                sizes={'100%'}
                fill={true}
            />
        </div>
    );
}



export default Villa;