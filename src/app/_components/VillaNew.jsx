'use client'
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { useAnimate, useScroll, animate, useAnimation, useInView, motion } from 'framer-motion';
import Book from './Button';
import { ClipImage } from './ClipImage';
import { FaPerson } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


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

    const prevImage = () => {
        setCurrent(prev => (prev + 1) % images.length)
    }

    const nextImage = () => {
        setCurrent(prev => (prev - 1 + images.length) % images.length)
    }
    const sidebarImg = `${process.env.NEXT_PUBLIC_BASE_API_URL}${data?.attributes?.images.data[0].attributes?.url}`
    const name = data?.attributes?.title
    const tag = data?.attributes?.tag
    const description = data?.attributes?.shortDescription
    const details = data?.attributes?.details[0]
    const facilites = data?.attributes?.facilities.data
    const roomTypes = data?.attributes?.roomtypes.data
    const views = data?.attributes?.views.data
    const bathrooms = data?.attributes?.bathroom
    // HOOKS
    const [scope, animate] = useAnimate();
    const clipRef = useRef(null);


 

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
                                    <span>{'Max Adults'}</span>

                                </div>
                                <div>
                                    <p>{details?.bedrooms}</p>
                                    <span>{'Bedrooms'}</span>
                                </div>
                                <div>
                                    <p>{details?.maxChildren}</p>
                                    <span>{'Max Children'}</span>
                                </div>
                                <div>
                                    <p>{details?.squareMeters}</p>
                                    <span>{'Square Meters'}</span>
                                </div>
                                <div>
                                    <p>{details?.pullOutCouch}</p>
                                    <span>{'Pull Out Couch'}</span>
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
                                <span>Rooms</span>
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
                                    <span className='room_title'>Views</span>
                                    <div>   
                                        {views && views.map((view, index) => {
                                            return (
                                                <p key={index} className='view_item'>{view.attributes.name}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className='room_bathrooms'>
                                    <span  className='room_title'>Bathrooms / WC</span>
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
                            <p className='interiors_header'>INTERIORS</p>
                        </div>
                    </div>

                </div>
            </div>
         
        </div>

    )
}



// export const ScrollImageSticky = ({ image }) => {
//     const ref = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["end end", "start start"]
//     });



//     useEffect(() => {
//         scrollYProgress.on("change", (v) => {
//             console.log('v', v)
//             const scroll = (v * 15);
//             animate('.sticky_img_container', {
//                 clipPath: `inset(${scroll}%)`
//             }, {
//                 ease: "linear",
//                 duration: 0.4
//             })
//         })
//     }, [])
//     return (
//         <div ref={ref} className='v_scroll_image'>
          
//             <div className='v_scroll_image_inner'>
//                 <div className='sticky_img_container'>
//                     <Image
//                         alt='villa image'
//                         src={image}
//                         fill={true}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }


// export const ImageScroll = ({ image }) => {

//     return (
//         <div className='v_main_image_container_inner' >
//             <Image
//                 alt="an image of the interior of the ioannian villa"
//                 src={image}
//                 sizes={'100%'}
//                 fill={true}
//             />
//         </div>
//     );
// }



export default VillaNew;