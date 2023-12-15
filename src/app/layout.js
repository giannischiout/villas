

import { Inter, Quattrocento } from 'next/font/google'
import './globals.css'
import Navbar from './_components/Navbar'
import SmoothScrolling from './_hooks/smoothScrolling'
const inter = Inter({ subsets: ['latin'] })
const qautrocento = Quattrocento({ subsets: ['latin'], weight: ['400', '700'] })
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ qautrocento.className}>
        <SmoothScrolling>
              {/* <Navbar /> */}
        {children}
        </SmoothScrolling>
        </body>
    </html>
  )
}
