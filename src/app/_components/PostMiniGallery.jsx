'use client'
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
export default function PostMiniGallery({ images }) {
    const [current, setCurrent] = useState(0)

    const handleNext = () => {
        setCurrent((current + 1) % images.length);
    }
    const handlePrev = () => {
        setCurrent((current - 1 + images.length) % images.length);
    }
    return (
        <div className="single_post_gallery">
        < Image alt={'gallery images'} src={`${process.env.NEXT_PUBLIC_BASE_API_URL}${images[current].url}`} layout="fill" objectFit="cover" />
            <button onClick={handleNext} className="single_gallery_btn single_btn_left">
                <IoIosArrowBack />
            </button>
            <button onClick={handlePrev} className="single_gallery_btn single_btn_right">
                <IoIosArrowForward />
            </button>
        </div>
    )
}