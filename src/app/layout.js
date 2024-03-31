

import {  Bona_Nova, Noto_Sans_JP  } from 'next/font/google'
import './globals.css'
import SmoothScrolling from './_hooks/smoothScrolling'
import { ModalProvider } from './_context/useModal'
import { CookiesProvider } from 'next-client-cookies/server';

const bonaNova = Bona_Nova({ subsets: ['latin'], weight: ['400', '700'], variable: "--font_bona_nova" })
const noto =  Noto_Sans_JP({subsets: ['latin'], weight: ['300', '400', '500', '700'], variable: "--font_noto"})
export const metadata = {
  title: 'Ionian Dream Villas',
  description: 'Ionian Dream Villas in Lefkada is a true paradise for guests looking to experience the beauty of the island.',

}


export default async function RootLayout({ children }) {


 
  
  return (
    <html lang="en">
      <body className={`$${bonaNova.variant}  ${noto.variable}`}>
      <CookiesProvider>
          <ModalProvider>
            <SmoothScrolling>
              {children}
            </SmoothScrolling>
          </ModalProvider>
        </CookiesProvider >
      </body>
    </html>
  )
}
