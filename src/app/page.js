import Navbar from './_components/Navbar'
import ImageSlider from './_components/ImageSlider'
import Intro from './_components/Intro'
import Home from './_components/Home'
import { cookies } from 'next/headers'

export default function Page() {
  cookies().set('locale', 'locale=en')

  return (
        <div>
          <Home />
        </div>
  )
}
