import Footer from '@/components/Footer/Footer'
import Banner from '@/components/Banner/Banner'
import Navbar from '@/components/Navbar/Navbar.jsx'

export default function Layout({ children }) {

  return (
    <>
      <Banner />
      <Navbar />
        {children}
      <Footer />
    </>
  )
}