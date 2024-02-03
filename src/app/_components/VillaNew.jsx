'use client'
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { useAnimate, useScroll, animate, useAnimation, useInView, motion } from 'framer-motion';
import { VillaFeatures, VillaDetails, VillaFacilities } from './VillaDetails';
import ImageSlider from './ImageSlider';
import VillasPresentation from './VillasPresentation';
import Book from './Button';
import { ClipImage } from './ClipImage';
import { FaPerson } from "react-icons/fa6";

export const Reveal = ({ children }) => {
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






const VillaNew = ({ data }) => {
    console.log('dataaaaaaaaaa')
    console.log(data)
    //data:
    const sidebarImg = `${process.env.NEXT_PUBLIC_BASE_API_URL}${data?.attributes?.images.data[0].attributes?.url}`
    const mainImg = `${process.env.NEXT_PUBLIC_BASE_API_URL}${data?.attributes?.images.data[1].attributes?.url}`
    const name = data?.attributes?.title
    const tag = data?.attributes?.tag
    const title = data?.attributes?.title
    const description = data?.attributes?.shortDescription
    const details = data?.attributes?.details[0]
    const facilites = data?.attributes?.facilities.data
    const roomTypes = data?.attributes?.roomtypes.data
    const views = data?.attributes?.views.data
    const bathrooms = data?.attributes?.bathroom
    const sliderImgs = data?.attributes?.interiorImages.data
    function getImages() {
        let images = []
        sliderImgs.map((img) => {
            images.push(`${process.env.NEXT_PUBLIC_BASE_API_URL}${img.attributes.url}`)
        })
        return images
    }
    const imagesSlider = getImages()
    // hooks:
    const [scope, animate] = useAnimate();
    const clipRef = useRef(null);


    const isInView = useInView(scope);
    const { scrollYProgress } = useScroll({

    });


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
        <div className='villa_container' >
            <div ref={scope} className="villa_top" >
                <div className="v_sidebar_space"></div>
                <div className="v_sidebar">
                    <div className='v_sidebar_top'>
                        <p>{'VILLAS'}</p>
                    </div>
                    <ClipImage img={sidebarImg} forwardRef={clipRef} className="v_sidebar_img_container" />
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
                        <div className='villa_attributes'>
                            <div id="villa_attr_details">
                                <div>
                                    <p>{details['maxAduls']}</p>
                                    <span>{'Max Adults'}</span>

                                </div>
                                <div>
                                    <p>{details['maxAduls']}</p>
                                    <span>{'Max Adults'}</span>
                                </div>
                                <div>
                                    <p>{details['maxAduls']}</p>
                                    <span>{'Max Adults'}</span>
                                </div>
                                <div>
                                    <p>{details['maxAduls']}</p>
                                    <span>{'Max Adults'}</span>
                                </div>

                            </div>
                            <div id="villa_book_now">
                                <Book hasCloseBtn={true} />
                            </div>
                        </div>
                        <div className='villa_description'>
                            <p>{description}</p>
                        </div>
                        <div className='villa_info'>
                            <div className='villa_facilities'>
                                <span>Facilities</span>
                                <div>
                                {facilites.map((facility, index) => {
                                    return (
                                        <div className='facility_item' key={index}>
                                            <p>{facility.attributes.name}</p>
                                        </div>
                                    )
                                    })}
                                </div>
                              
                            </div>
                            <div className='room_features'>
                                <span>Rooms</span>
                                {roomTypes && roomTypes.map((room, index) => {
                                    {console.log('room', JSON.stringify(room))}
                                    return (
                                        <div className='room_feature'>
                                            <div className='room_icon'>
                                                <FaPerson />
                                                <FaPerson />
                                            </div>
                                            <div className='room_text'>
                                                <span>{room.attributes.Name}</span>
                                                <p>{room.attributes.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='room_feat_right'>
                                <div className='room_views'>
                                    <span className='room_title'>Views</span>
                                    <div>   
                                        {views.map((view, index) => {
                                            return (
                                                <p  className='view_item'>{view.attributes.name}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className='room_bathrooms'>
                                    <span  className='room_title'>Bathrooms / WC</span>
                                    <div>
                                        {bathrooms.map((bathroom, index) => {
                                            return (
                                                <p  className='bathroom_item'>{bathroom.description}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <p className='interiors_header'>INTERIORS</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='villa_slider'>
            <ImageSlider images={imagesSlider} />
            </div>
          
            {/* <ScrollImageSticky image={scrollImg} />
            <VillaFacilities
                image={facilitiesImg}
                facilities={facilities?.data}
                outdoorSqr={details?.squareMeters}
                interiorSqr={details?.squareMeters}
            />
            <ImageSlider images={imagesSlider} />
            <section>
                <VillasPresentation id={id} />
            </section> */}
        </div>

    )
}



export const ScrollImageSticky = ({ image }) => {
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


export const ImageScroll = ({ image }) => {

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



export default VillaNew;