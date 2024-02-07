

import { cookies } from 'next/headers'
import { PostButton } from '@/app/_components/Button';
import Image from "next/image"


const fetchPosts = async () => {
    "use server";
    const cookieStore = cookies()
    const locale = cookieStore.get('locale')
   
    const url = `${process.env.API_URL}/posts?${locale?.value}&populate=images`
    console.log(url)
    
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
        <section>
            <div className="v_presentation_sticky">
                <div className="presentation_bottom_container">
                    <div className="v_presentation_bottom">
                        <div>
                            <h6>Locations</h6>
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