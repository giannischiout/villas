import { VillaIntro } from "@/app/_components/Villa"
import { Reveal } from "@/app/_components/Villa"
import { cookies } from 'next/headers'


const fetchPosts = async (postId) => {
    "use server";
    const cookieStore = cookies()
    const locale = cookieStore.get('locale')
    console.log('locale in server component')
    console.log(locale)
    const url = `${process.env.API_URL}/posts?${locale?.value}&populate=images&id=${postId}`
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

export default async function Page({ params, searchParams }) {
    // console.log('params')
    // console.log(params.id)
    // const data = await fetchPosts(params.id)
    // console.log('data')
    // console.log(data)
    return (
        <div className="post_container">
            <VillaIntro sidebarImg={'/1.webp'} mainImg={'/1.webp'} tag={'this is the tag'} name={'blog post name'} >
                <Reveal>
                    <h3>{'title'}</h3>
                    <p id="text_animated" >
                        {`${'desc'}`}
                    </p>

                </Reveal>
               
            </VillaIntro>
        </div>
    )
}