'use client'
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { useAnimate } from "framer-motion"
const images = [
    '/jira/jira_1.webp',
    '/jira/jira_2.webp',
    '/jira/jira_3.webp',
    '/jira/jira_4.webp',
    '/jira/jira_5.webp',
    '/jira/jira_6.webp',

]


const ImageSlider = () => {
    const [index, setIndex] = useState(0)
    const ref = useRef(null)
    const [scope, animate] = useAnimate();
    const handleNext = () => {
        ref.current = index;
        setIndex(prev => (prev + 1) % images.length)
    }

    useEffect(() => {
        console.log(index)
        animate("#slide_anime", {
            clipPath: ["polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"]
        },
            {
                // ease: [0.6, 0.05, -0.01, 0.9],
                ease: 'linear',
                duration: 0.4,
            }
        )
        animate(".slider_img", {
            scale: [1.1, 1],
        },
            {   
                ease: 'linear',
                duration: 0.6,
                delay: 0.4
            }
        )
    }, [index])
    return (
        <section ref={scope} onClick={handleNext} className="slider_container">
            <div className="slider_inner">
                <div className="slider_image_container" id="slide_darker">
                    <Image src={images[index]} alt="villa" fill={true} sizes="100%" priority />
                </div>
                <div className="slider_image_container" id="slide_anime">
                    <Image className="slider_img" src={images[(index + 1) % images.length]} alt="villa" fill={true} sizes="100%" priority />
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
            <div className="space space_bottom"></div>
        </div>
    )
}
export default ImageSlider;