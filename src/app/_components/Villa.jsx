'use client'
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { useAnimate, useScroll, animate, useAnimation, useInView, motion } from 'framer-motion';
import { VillaFeatures, VillaDetails, VillaFacilities } from './VillaDetails';
import ImageSlider from './ImageSlider';
import VillasPresentation from './VillasPresentation';
import Book from './Button';
import { ClipImage } from './ClipImage';

const Reveal = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        } else {
            mainControls.start('hidden');
        }
    }, [isInView]);
    return (
        <div ref={ref} style={{ position: "relative", overflow: 'hidden' }} className=''>
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    )
}



export const VillaIntro = ({ children, sidebarImg, mainImg, tag, name }) => {
    const { scrollYProgress } = useScroll();
    const [scope, animate] = useAnimate();
    const clipRef = useRef(null);
    const isInView = useInView(scope);

    const handleIntroAnimation = async () => {
        animate('.v_main_image_container_inner', {
            opacity: [0, 1]
        }, {
            duration: 0.4,
            ease: 'easeIn'
        })
        animate('.v_sidebar', {
            opacity: [0.6, 1],
            y: ['1000px', '0px'],

        }, {
            duration: 0.4,
            ease: [0.6, 0.01, 0.05, 0.9]
        })
        await animate('.v_main_top', {
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
        <div ref={scope} className="villa_top" >
            <div className="v_sidebar_space"></div>
            <div className="v_sidebar">
                <div className='v_sidebar_top'>
                    <p>{'villas'}</p>
                </div>
                <ClipImage img={sidebarImg} forwardRef={clipRef} />
            </div>
            <div className="v_main">
                <div className='v_main_top'>
                    <div>
                        <h1>{name.toUpperCase()}</h1>
                        <h2>{tag}</h2>
                    </div>
                </div>
                <div className='v_main_image_container'  >
                    <ImageScroll image={mainImg} />
                </div>
                <div className="v_main_content" >
                    {children}
                </div>

            </div>
        </div>
    )
}


const Villa = ({
    id,
    title,
    description,
    name,
    tag,
    sidebarImg,
    mainImg,
    scrollImg,
    details,
    roomTypes,
    imagesSlider,
    facilitiesImg

}) => {







    return (
        <div className='villa_container' >
            <VillaIntro sidebarImg={sidebarImg} mainImg={mainImg} tag={tag} name={name} >
                <Reveal>
                    <h3>{title}</h3>
                    <p id="text_animated" >
                        {description}
                    </p>
                    < VillaDetails details={details} />
                    < VillaFeatures roomTypes={roomTypes} />
                </Reveal>
                <div
                    className='v_button_container'>
                    <Book />
                </div>
            </VillaIntro>
            <ScrollImageSticky image={scrollImg} />
            <VillaFacilities
                image={facilitiesImg}
                facilities={details.facilities}
                outdoorSqr={details.outdoorSqr}
                interiorSqr={details.interiorSqr}
            />
            <ImageSlider images={imagesSlider} />
            <section>
                <VillasPresentation id={id} />
            </section>
        </div>
    )
}


{/* <Reveal>
<h3>{title}</h3>
<p id="text_animated" >
    {description}
    </p>
< VillaDetails details={details} />
< VillaFeatures roomTypes={roomTypes} />
</Reveal>
<div
className='v_button_container'>
<Book />
</div> */}
const ScrollImageSticky = ({ image }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });



    useEffect(() => {
        scrollYProgress.on("change", (v) => {
            console.log('v', v)
            const scroll = (v * 15);
            animate('.sticky_img_container', {
                clipPath: `inset(${scroll}%)`
            }, {
                ease: "linear",
                duration: 0.4
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


const ImageScroll = ({ image }) => {

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