import Navbar from './_components/Navbar'
import ImageSlider from './_components/ImageSlider'
import Intro from './_components/Intro'
import Home from './_components/Home'
import { cookies } from 'next/headers'

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
  // cookies().set('locale', 'locale=en')

  
  return (
        <div>
          <Home posts={posts} />
        </div>
  )
}
