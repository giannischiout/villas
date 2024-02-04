
'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function RoomSlider({images}) {
    const [isOpen, setIsOpen] = useState(false)
    const [startIndex, setStartIndex] = useState(0);
    const imagesPerPage = 4;
    const showNextImages = () => {
        if (startIndex + imagesPerPage < images.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const showPrevImages = () => {
        if (startIndex - imagesPerPage >= 0) {
            setStartIndex(startIndex - 1);
        }
    };
    // const handleScroll = () => {
	// 	document.body.style.overflow = isOpen ? 'hidden' : 'auto';
	// };

	// // Add or remove event listener on component mount/unmount
	// useEffect(() => {
    //     console.log('is open')
    //     console.log(isOpen)
	// 	handleScroll();
	// 	return () => {
	// 		document.body.style.overflow = 'auto';
	// 	};
	// }, [isOpen]);
    return (
        <div className="room_gallery_container">
                <h2>ROOMS</h2>
        <div className='gallery_container'>
            <button onClick={showPrevImages} className="gallery_arrow gallery_arrow_back">
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
            <button  onClick={showNextImages} className="gallery_arrow gallery_arrow_next">
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