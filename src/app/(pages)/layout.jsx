 
import Navbar from "../_components/Navbar"
import FooterNew from "../_components/FooterNew"
export default function Layout({ children }) {
    return (
      <>
         <Navbar />
              {children}
        <FooterNew />
      </>
    )
  }