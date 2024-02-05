
'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function RoomSlider({images}) {
    const [isOpen, setIsOpen] = useState(false)
    const [startIndex, setStartIndex] = useState(0);
    const imagesPerPage = 4;
  

    
    const showNextImages = () => {
            if(startIndex == images.length - imagesPerPage) {
                return;
            }
            setStartIndex(prev => prev + 1);
    };

    const showPrevImages = () => {
        if(startIndex == 0) return;
        setStartIndex(prev => prev - 1 );
    };
    
   
    return (
        <div className="room_gallery_container">
                <h2>ROOMS</h2>
        <div className='gallery_container'>
            <button style={startIndex == 0 ? {backgroundColor: 'rgb(233, 226, 226)'} : null} onClick={showPrevImages} className="gallery_arrow gallery_arrow_back">
                <IoIosArrowBack />
            </button>
            {images.slice(startIndex, startIndex + imagesPerPage).map((img, index) => (
                    <div key={index} onClick={() => setIsOpen(true)} className='room_image'>
                        <Image
                            width={img.width}
                            height={400}
                            src={img.src}
                            alt='room images'
                        />
                    </div>
                ))}
            <button  style={startIndex == images.length - imagesPerPage ? {backgroundColor: 'rgb(233, 226, 226)'} : null} onClick={showNextImages} className="gallery_arrow gallery_arrow_next">
                <IoIosArrowForward />
            </button>
        </div>
        {/* {isOpen ? (
                <div className='dialog_image'>
                    aaawd
                </div>
            ) : null} */}
        </div>
    )
}