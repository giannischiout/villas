'use client'
import {useState} from 'react'
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Btn } from "./Button"

import axios from 'axios'
import { useEffect } from "react"
const Posts = () => {
    const [data, setData] = useState([]);

    const handleFetch  = async() => {
        const {data} = await axios.get('https://strapi.3v7i.com/api/posts/?populate=images')
        console.log(data.data)
        setData(data.data)
    }

   
    useEffect(() => {
        handleFetch()
    }, [])
    return (
        <section>
            <div className="v_presentation_sticky">
                <div className="presentation_bottom_container">
                    <div className="v_presentation_bottom">
                        <div>
                            <h6>Blog</h6>
                            <p>
                            Dive into the sun-soaked realm of Lefkada, where each sandy stretch and turquoise bay tells a 
                            story of natural splendor and coastal bliss. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="v_presentation_villas">
                <div className="v_presentation_villas_inner">
                    <div>
                    {data.map((post, i) => {
                        return (
                            <Card 
                                key={i}
                                title={post.attributes.title} 
                                description={post.attributes.shordDescription}
                                image={post.attributes.images.data[0].attributes.url} 
                                id={post.id}
                            />
                        )
                    })}
                    </div>
                </div>
            </div>
        </section>
    )
}


const Card = ({ image, description, title, date, id }) => {
    const router = useRouter();
    const onClick = () => {
        router.push(`/posts/single/${id}`)
    }
    return (
        <div className="post_card_container">
            <div className="v_presentation_card_image_container">
                <Image src={`https://strapi.3v7i.com/${image}`} alt="villa1" fill={true} sizes={"(max-width: 800px) 90%"} />

            </div>
            <div className="posts_text_container">
                <div className="posts_text ">
                    <span className="v_card_title">{`${title}`}</span>
                    <p>{`${description}`}</p>
                </div>
                <div className='posts_btn'>
                <Btn text="see more" onClick={onClick} />
                </div>
            </div>
        </div>
    )
}



export default Posts;