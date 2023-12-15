

import { Inter, Quattrocento, Yellowtail } from 'next/font/google'
import './globals.css'
import Navbar from './_components/Navbar'
import SmoothScrolling from './_hooks/smoothScrolling'
const inter = Inter({ subsets: ['latin'] })
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
      <body className={`${qautrocento.variable} ${yellow.variable}` }>
        <SmoothScrolling>
              <Navbar />
        {children}
        </SmoothScrolling>
        </body>
    </html>
  )
}
