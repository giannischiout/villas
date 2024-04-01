

import { cookies } from 'next/headers'
import { PostButton } from '@/app/_components/Button';
import Image from "next/image"


const fetchPosts = async () => {
    const cookieStore = cookies()
    const locale = cookieStore.get('locale') || 'locale=en'
   
    const url = `${process.env.API_URL}/posts?${locale?.value}&populate=images`
    
    let data = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }, {
        cache: 'no-cache'
    })

    let json = await data.json()
    return json.data;
}
const Page = async () => {
    const data = await fetchPosts()
  
    return (
        <section className="posts_container">
            <div className='posts_top'></div>
            <div className='posts_header'>
                <h1>BLOG POSTS</h1>
            </div>
            <div className='posts_inner'>
           
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
                      
          
        </section>
    )
}

 const Card = ({ image, description, title, date, id, loading }) => {
  
    return (
        <div className="post_card_container">
            <div className="v_presentation_card_image_container">
                <Image src={`https://strapi.3v7i.com/${image}`} alt="villa1" fill={true} sizes={"(max-width: 800px) 90%"} />
            </div>
            <div className="posts_text_container">
                <div className="posts_text ">
                    <span className="v_card_title">{`${title} `}</span>
                    <p>{`${description.slice(0, 200).concat('...')}`}</p>
                </div>
                <div className='posts_btn'>
                    <PostButton id={id}/>
                </div>
            </div>
        </div>
    )
}



export default Page;