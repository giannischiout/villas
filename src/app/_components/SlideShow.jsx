
'use client'
import { useEffect, useState } from "react"
import {useRouter} from "next/navigation"
import Image from "next/image"
import axios from "axios"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const SlideShow = ({posts}) => {
  
    const [current, setCurrent] = useState(0)

    const router = useRouter()
    const nextImage = () => {
        setCurrent((current + 1) % posts.length);
      };
    
      const prevImage = () => {
        setCurrent((current - 1 + posts.length) % posts.length);
      };
       
     
    return (
        <div className="slideshow">
            <Image 
                src={`${process.env.NEXT_PUBLIC_BASE_API_URL}${posts[current].attributes.images.data[0].attributes.url}`}
                fill
                alt="lefkada's island places to see"
                sizes="100%"
            />
            <div className="slideshow_inner">
                <div className="slideshow_left">
                    <p>
                        {posts[current]?.attributes?.title}
                    </p>
                    <span>
                        {posts[current]?.attributes?.shordDescription.slice(0, 60).concat('...')}
                    </span>
                    <div className="btn_container">
                        <button onClick={prevImage}>
                            <IoIosArrowBack />
                        </button>
                        <button onClick={nextImage}>
                            <IoIosArrowForward  />
                        </button>
                    </div>
                </div>
                <div className="slideshow_right" onClick={() =>router.push(`/posts/single/${posts[current].id}`)}>
                        <div className="home_post_circle">
                            <span>LEARN MORE ABOUT LEFKADAS ISLANDS</span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SlideShow;