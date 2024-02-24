

import {  Bona_Nova, Noto_Sans_JP  } from 'next/font/google'
import './globals.css'
import Navbar from './_components/Navbar'
import SmoothScrolling from './_hooks/smoothScrolling'
import { ModalProvider } from './_context/useModal'
import FooterNew from './_components/FooterNew'
import { CookiesProvider } from 'next-client-cookies/server';

const bonaNova = Bona_Nova({ subsets: ['latin'], weight: ['400', '700'], variable: "--font_bona_nova" })

const noto =  Noto_Sans_JP({subsets: ['latin'], weight: ['300', '400', '500', '700'], variable: "--font_noto"})
export const metadata = {
  title: 'Ionian Dream Villas',
  description: 'Ionian Dream Villas in Lefkada is a true paradise for guests looking to experience the beauty of the island.',

}

const fetchData = async () => {
  "use server";
  const url = `${process.env.API_URL}/hotel?populate=*`
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
export default async function RootLayout({ children }) {

  const data = await fetchData()
 
  let dates = {
    opening: data?.attributes?.openingDate,
    closing: data?.attributes?.closingDate
  }
  return (
    <html lang="en">
      <body className={`$${bonaNova.variant}  ${noto.variable}`}>
      <CookiesProvider>
          <ModalProvider>
            <SmoothScrolling>
              <Navbar  dates={dates}/>
              {children}
              <FooterNew />
            </SmoothScrolling>
          </ModalProvider>
        </CookiesProvider >
      </body>
    </html>
  )
}
