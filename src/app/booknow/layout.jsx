
import Navbar from "../_components/Navbar"
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}