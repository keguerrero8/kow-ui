import Footer from '@/components/Footer/Footer'
import Banner from '@/components/Banner/Banner'
import Navbar from '@/components/Navbar/Navbar'
 
export default function Layout({ children, user, setUser }) {
  return (
    <>
      <Banner />
      <Navbar user={user} setUser={setUser}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}