'use client'
import { useEffect, useState } from "react"
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
    const [index, setIndex]= useState(0)
    const [scope, animate] = useAnimate();
    const handleNext = () => {
        setIndex(prev => (prev + 1) % images.length )
    }

    useEffect(() => {
        console.log(index)
        if(index === 0) return
        animate(".slider_image_container", {
            clipPath: ["polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"]
        },
        {
            // ease: [0.6, 0.05, -0.01, 0.9],
            ease: 'linear',
            duration: 0.6,
        }
        )
        animate(".slider_img", {
           scale: [1.1, 1],
        },
        {
           duration: 1.3,
        }
        )
    }, [index])
    return (
        <div ref={scope} onClick={handleNext} className="slider_container">
            <div className="slider_absolute">
                    <Image src={images[index]} alt="villa" fill={true} sizes="100%" priority/>
            </div>
            <div className="slider_image_container">
                    <Image className="slider_img"  src={images[(index + 1) % images.length]} alt="villa" fill={true} sizes="100%" priority/>
            </div>
            <Teaser index={index} images={images} />
        </div>
    )
}



const Teaser = ({images, index}) => {
    const newIndex = (index + 2) % images.length
    return (
        <div className="teaser_container">
            <div className="space space_top">
                <p>{`${index + 1}  / ${images.length}`}</p>
                <p>coming next</p>
            </div>
            <div  className="teaser_image">
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