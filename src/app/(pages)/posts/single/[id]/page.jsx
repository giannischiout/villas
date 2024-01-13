import { RedirectButton } from "@/app/_components/Button";
import { VillaIntro } from "@/app/_components/Villa"
import { Reveal } from "@/app/_components/Villa"
import { cookies } from 'next/headers'
import Image from "next/image"
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

const fetchPosts = async (postId) => {
    "use server";
    const cookieStore = cookies()
    const locale = cookieStore.get('locale')
    console.log('locale in server component')
    console.log(locale)
    // const url = `${process.env.API_URL}/posts?${locale?.value}&populate=images&id=${postId}`
    const url = `${process.env.API_URL}/posts/${postId}?populate=images`
    console.log(url)
    let data = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let json = await data.json()
    return json.data;
}

export default async function Page({ params}) {
 
    const data = await fetchPosts(params.id)
    const image = data?.attributes?.images.data[0].attributes.url;
    const date = data?.attributes?.createdAt.split('T')[0];
    
    return (
        <section className="post_container">
            <div className="single_post_top"></div>
            <div className="single_post_main">
                <div className="single_post_main_inner">
                    <div className="single_image">
                        <Image
                            src={`${process.env.BASE_API_URL}${image}`}
                            fill={true}
                            sizes="100% 600px"
                        />
                    </div>
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
                        <PostMapLink latt={data?.attributes?.lattitude} long={data?.attributes?.londitude} />
                        <RedirectButton href="/posts/all" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}



export const PostMapLink = ({ latt, long }) => {
    const coordinates = `${latt},${long}`;
    return (
        <Link className="single_btn single_gps_btn" href={`https://www.google.com/maps?q=${coordinates}`} target='blank'>
        google maps
        <GoArrowUpRight />
    </Link>
    )
}
