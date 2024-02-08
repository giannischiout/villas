
import Home from './_components/Home'
import { cookies } from 'next/headers'
import Hero from './_components/Hero';
import {  SectionThree, SectionFour, SectionFive } from './_components/SectionThree';
import VillasPresentation from './_components/VillasPresentation';
import SlideShow from './_components/SlideShow';
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


export default async function Page() {
  const posts = await fetchPosts()

  
  return (
        <div>
            <Hero />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SlideShow posts={posts}/>
          <VillasPresentation />
        </div>
  )
}
