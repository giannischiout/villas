

import { Inter, Quattrocento, Yellowtail, Montserrat, Bona_Nova } from 'next/font/google'
import './globals.css'
import Navbar from './_components/Navbar'
import SmoothScrolling from './_hooks/smoothScrolling'
import { LocaleProvider } from './_context/useLocale'
import { ModalProvider } from './_context/useModal'
import FooterNew from './_components/FooterNew'
const bonaNova = Bona_Nova({ subsets: ['latin'], weight: ['400', '700'], variable: "--font_bona_nova" })
const mont = Montserrat({
  subsets: ['latin'], weight: ['300', '400', '500', '700'],
  variable: "--font-mont"
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
          <ModalProvider>
            <SmoothScrolling>
              <Navbar />
              {children}
              <FooterNew />
            </SmoothScrolling>
          </ModalProvider>
        </LocaleProvider>
        
         

      </body>
    </html>
  )
}
