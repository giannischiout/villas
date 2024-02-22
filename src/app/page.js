
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

const getData = async () => {
  const cookieStore = cookies()
  const locale = cookieStore.get('locale')
  let url = `${process.env.API_URL}/villas?${locale?.value}&populate=details,facilities,roomtypes,bathroom,images,views,interiorImages,roomImages `
  const res = await fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },

  });
  let json = await res.json();
  let newdata = json.data.map(villa => {
    return {
      title: villa.attributes.title,
      details: villa.attributes.details[0],
      id: villa.id
    }
  });
  return newdata;
}
export default async function Page() {
  const posts = await fetchPosts()
  const motos = await fetchMoto();
  const data = await fetchData()
  const villas = await getData()
  let description = data.attributes.hotelshortdescription;
  let title = data.attributes.hotelname;


  
  return (
        <div>
            <Hero data={motos} description={description} title={title} />
          <SectionThree  data={motos} />
          <SectionFour  data={motos} />
          <SectionFive  data={motos} />
          <SlideShow posts={posts}/>
          <VillasPresentation villas={villas}/>
        </div>
  )
}
