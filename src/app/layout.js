

import { Inter, Quattrocento, Yellowtail, Montserrat, Bona_Nova } from 'next/font/google'
import './globals.css'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'
import SmoothScrolling from './_hooks/smoothScrolling'
import { LocaleProvider } from './_context/useLocale'
const bonaNova = Bona_Nova({ subsets: ['latin'], weight: ['400', '700'], variable: "--font_bona_nova" })
const mont = Montserrat({
  subsets: ['latin'], weight: ['300', '400', '500', '700'],
  variable: "--font-mont"
})
const qautrocento = Quattrocento({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: "--font-qautrocento"
})
const yellow = Yellowtail({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-yellotail"
})
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`$${bonaNova.variant}  ${mont.variable}`}>
        <LocaleProvider>
          <SmoothScrolling>
            <Navbar />
            {children}
            <Footer />
          </SmoothScrolling>
        </LocaleProvider>

      </body>
    </html>
  )
}
