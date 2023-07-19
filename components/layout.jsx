import useSWR from "swr"

import Footer from '@/components/Footer/Footer'
import Banner from '@/components/Banner/Banner'
import Navbar from '@/components/Navbar/Navbar.jsx'

const fetcher = (url) => fetch(url, { credentials: "include" }).then(res => res.json())

export default function Layout({ children }) {
  const { user, error } = useSWR("http://localhost:8000/auth-sessions/authenticated", fetcher)

  return (
    <>
      <Banner />
      <Navbar user={user} />
        {children}
      <Footer />
    </>
  )
}