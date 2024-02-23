'use client'
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { useAnimate, useScroll, animate, useAnimation, useInView, motion } from 'framer-motion';
import Book from './Button';
import { ClipImage } from './ClipImage';
import { FaPerson } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { text } from '@/translations';
import { useCookies } from 'next-client-cookies';
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



const images = [
    '/intro_day.webp',
    '/2.webp',
    '/3.webp',
    '/4.webp',
]



const VillaNew = ({ data }) => {
    const [current, setCurrent] = useState(0);
    const cookies = useCookies();
    const locale = cookies.get('locale') || 'locale=en';
    const prevImage = () => {
        setCurrent(prev => (prev + 1) % images.length)
    }

    const nextImage = () => {
        setCurrent(prev => (prev - 1 + images.length) % images.length)
    }
    const sidebarImg = `${process.env.NEXT_PUBLIC_BASE_API_URL}${data?.attributes?.images.data[0].attributes?.url}` || '/intro_day.webp'
    const name = data?.attributes?.title
    const tag = data?.attributes?.tag
    const description = data?.attributes?.shortDescription
    const details = data?.attributes?.details[0]
    const facilites = data?.attributes?.facilities.data
    const roomTypes = data?.attributes?.roomtypes.data
    const views = data?.attributes?.views.data
    const bathrooms = data?.attributes?.bathroom
    console.log('bathrooms')
    console.log(bathrooms)
    // HOOKS
    const [scope, animate] = useAnimate();
    const clipRef = useRef(null)

 

    const handleIntroAnimation = async () => {
        animate('.v_main_image_container_inner', {
            opacity: [0, 1]
        }, {
            duration: 0.4,
            ease: 'easeIn'
        })
        await animate('.v_main_image_container', {
            opacity: [0, 1],
        }, {
            duration: 1,
            ease: 'easeInOut'
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
                            <h1>{name?.toUpperCase()}</h1>
                            <h2>{tag}</h2>
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
                    </div>
                    <div className="v_main_content" >
                        <div className='villa_attributes'>
                            <div id="villa_attr_details">
                                <div>
                                    <p>{details?.maxAduls}</p>
                                    <span>{text[locale].maxAdults}</span>
                                </div>
                                <div>
                                    <p>{details?.bedrooms}</p>
                                    <span>{text[locale].bedrooms}</span>
                                </div>
                                <div>
                                    <p>{details?.squareMeters}</p>
                                    <span>{text[locale].sqm}</span>
                                </div>
                                <div>
                                    <p>{details?.pullOutCouch}</p>
                                    <span>{text[locale].pullOutCouch}</span>
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
                                <span>{text[locale].facilities}</span>
                                <div>
                                {facilites && facilites.map((facility, index) => {
                                    return (
                                        <div className='facility_item' key={index}>
                                            <p>{facility?.attributes?.name}</p>
                                        </div>
                                    )
                                    })}
                                </div>
                              
                            </div>
                            <div className='room_features'>
                                <span>{text[locale].rooms}</span>
                                {roomTypes && roomTypes.map((room, index) => {
                                    return (
                                        <div key={index} className='room_feature'>
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
                                    <span className='room_title'>{text[locale].views}</span>
                                    <div>   
                                        {views && views.map((view, index) => {
                                            return (
                                                <p key={index} className='view_item'>{view.attributes.name}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className='room_bathrooms'>
                                    <span  className='room_title'>{text[locale].bathrooms}</span>
                                    <div>
                                        {bathrooms && bathrooms.map((bathroom, index) => {
                                            return (
                                                <p key={index}  className='bathroom_item'>{bathroom.description}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <p className='interiors_header'>{text[locale].interiors}</p>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>

    )
}




export default VillaNew;