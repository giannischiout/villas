
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
const fetchMoto = async () => {
  "use server";
  const cookieStore = cookies()
  const locale = cookieStore.get('locale')
  const url = `${process.env.API_URL}/moto-texts?${locale?.value}`
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
const fetchData = async () => {
  "use server";
  const cookieStore = cookies()
  const locale = cookieStore.get('locale')
  const url = `${process.env.API_URL}/hotel?${locale?.value}`
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
  const motos = await fetchMoto();
  const data = await fetchData()
  let description = data.attributes.hotelshortdescription;
  let title = data.attributes.hotelname;


  
  return (
        <div>
            <Hero data={motos} description={description} title={title} />
          <SectionThree  data={motos} />
          <SectionFour  data={motos} />
          <SectionFive  data={motos} />
          <SlideShow posts={posts}/>
          <VillasPresentation />
        </div>
  )
}
