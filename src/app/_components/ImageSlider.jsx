'use client'
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { useAnimate, useScroll, useTransform, motion, useMotionTemplate, useMotionValue, useInView, useAnimation} from "framer-motion"



const ImageSlider = ({images}) => {
    const [index, setIndex] = useState(0)
    const [scope, animate] = useAnimate();
    const ref = useRef(null);
    const isInView = useInView(ref)
    const opacityControls = useAnimation();
    const handleNext = () => {
        setIndex(prev => (prev + 1) % images.length)
        handleAnimate()
    }
    
    const handleAnimate = () => {
        animate("#slide_anime", {
            clipPath: ["polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"]
        },
            {
                // ease: [0.6, 0.05, -0.01, 0.9],
                ease: 'easeInOut',
                duration: 0.4,
            }
        )
    
    }

    // useEffect(() => {
    //     animate("#slide_anime", {
    //         clipPath: ["polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"]
    //     },
    //         {
    //             // ease: [0.6, 0.05, -0.01, 0.9],
    //             ease: 'easeInOut',
    //             duration: 0.4,
    //         }
    //     )
    //     // animate(".slider_img", {
    //     //     scale: [1.1, 1],
    //     // },
    //     //     {   
    //     //         ease: 'linear',
    //     //         duration: 2,
    //     //         delay: 0.2
    //     //     }
    //     // )
    // }, [index])

 
    return (
        <section ref={scope} onClick={handleNext} className="slider_container">
            <div
            className="slider_inner">
                <div className="slider_image_container" id="slide_darker">
                    <img src={images[index]} alt="villa"  />
                </div>
                <div className="slider_image_container" id="slide_anime">
                    <motion.img 
                    className="slider_img" src={ images[(index + 1) % images.length]} alt="villa"  />
                </div>
                <Teaser index={index} images={images} />
            </div>
        </section>
    )
}



const Teaser = ({ images, index }) => {
    const newIndex = (index + 2) % images.length
    return (
        <div className="teaser_container">
            <div className="space space_top">
                <p>{`${index + 1}  / ${images.length}`}</p>
                <p>coming next</p>
            </div>
            <div className="teaser_image">
                <Image
                    src={images[newIndex]}
                    alt="villa"
                    sizes="100%"
                    fill={true}
                />
            </div>
        </div>
    )
}
export default ImageSlider;