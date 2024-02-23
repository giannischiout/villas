'use client'
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { useAnimate, useScroll, useTransform, motion, useMotionTemplate, useMotionValue, useInView, useAnimation} from "framer-motion"


const fallBackImages = [
    '/1.webp',
    '/2.webp',
    '/3.webp',
    '/4.webp',
    '/5.webp',
]


const ImageSlider = ({images}) => {
    let _images = images ? images : fallBackImages;
    console.log(_images)
    const [index, setIndex] = useState(0)
    const [scope, animate] = useAnimate();
    const ref = useRef(null);
  
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

   

 
    return (
        <section ref={scope} onClick={handleNext} className="slider_container">
            <div
            className="slider_inner">
                <div className="slider_image_container" id="slide_darker">
                    <Image src={_images[index]} alt="villa" sizes="100%" fill={true} />
                </div>
                <div className="slider_image_container" id="slide_anime">
                    <Image
                    className="slider_img" src={ _images[(index + 1) % _images.length]} alt="villa" fill  />
                </div>
                <Teaser index={index} images={_images} />
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