import { RedirectButton } from "@/app/_components/Button";

import { cookies } from 'next/headers'
import Image from "next/image"
import PostMiniGallery from "@/app/_components/PostMiniGallery";
import { PostButton } from '@/app/_components/Button';
import Map from "@/app/_components/Map";
import { text } from "@/translations";

const fetchPosts = async (postId) => {
    "use server";
    const url = `${process.env.API_URL}/posts/${postId}?populate=images`
    let data = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let json = await data.json()
    return json.data;
}


const fetchAll = async () => {
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
    },
    {
        cache: 'no-cache'
    }
    )

    let json = await data.json()
    return json.data;
}

export default async function Page({ params }) {
    const data = await fetchPosts(params.id)
    const cookieStore = cookies()
    const locale = cookieStore.get('locale')?.value || 'locale=en';
   
    const allData = await fetchAll()
    const image = data?.attributes?.images.data[0].attributes.url;
    const date = data?.attributes?.createdAt.split('T')[0];
    const images = data?.attributes?.images.data.map(item => {
        return {
            url: item.attributes.url
        }
    });

   
      const location = {
        lng: parseFloat( data?.attributes?.londitude),
        lat: parseFloat(data?.attributes?.lattitude),
      };

    return (
        <section className="post_container">
            <div className="single_post_top"></div>
            <div className="single_post_main">
                <div className="single_post_main_inner">
                    <div className="single_image">
                            <Image 
                            priority={true}
                            alt={'gallery images'} 
                            src={`${process.env.BASE_API_URL}${image}`} 
                            fill 
                            
                        />
                       
                        
                    </div>
                    <div className="single_post_grid">
                        <div className="single_content">
                            <div className="single_details">
                                <span>{date}</span>
                                <span>{data?.attributes.type}</span>
                            </div>
                            <h1>{data?.attributes?.title}</h1>
                            <div>
                                <span className="single_distance">{data?.attributes.distance}</span>
                            </div>
                            <p className="single_description">{data?.attributes?.longDescription}</p>
                            <div className="single_actions">
                                <PostMiniGallery images={images} />
                                <RedirectButton href="/posts/all" />
                            </div>
                        </div>
                        <div className="single_post_maps">

                            <div className="single_maps">
                                <Map location={location} />
                            </div>
                        </div>
                    </div>
                    <div className="other_posts">
                        <h3>{text[locale]?.otherLocation}</h3>
                        <div className="other_posts_grid">
                        {allData.map((post, i) => {
                            if(post.id == params.id) return;
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
            </div>
           
        </section >
    )
}


const Card = ({ image, description, title, date, id, loading }) => {
    return (
        <div className="post_card_container">
            <div className="v_presentation_card_image_container other_posts_img">
                <Image src={`https://strapi.3v7i.com/${image}`} alt="villa1" fill={true} sizes={"(max-width: 800px) 90%"} />
            </div>
            <div className="posts_text_container">
                <div className="posts_text">
                    <span className="v_card_title  __new_title">{`${title} `}</span>
                    <p>{`${description.slice(0, 200).concat('...')}`}</p>
                </div>
                <div className='posts_btn'>
                    <PostButton id={id}/>
                </div>
            </div>
        </div>
    )
}


