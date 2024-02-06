
'use client'
import { set } from 'date-fns';
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function RoomSlider({images}) {
    const [isOpen, setIsOpen] = useState(false)
    const [startIndex, setStartIndex] = useState(0);
    const [imagesPerPage, setImagesPerPage] = useState(4);
    const [width, setWidth] = useState();

    useEffect(() => {
      // Function to update width when the window is resized
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
  
      // Attach event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); 

    useEffect(() => {
        if(width < 768) {
            setImagesPerPage(1);
        } else if(width < 1200) {
            setImagesPerPage(2);
        } else {
            setImagesPerPage(4);
        }
    }, [])
    
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
                    <div key={index} onClick={() => setIsOpen(true)} className='room_image' style={{width: img.width, height: '400px'}}>
                        <Image
                            fill
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