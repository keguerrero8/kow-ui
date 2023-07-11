import Layout from '@/components/layout'
import '@/styles/globals.css'

import React, { useEffect, useState } from 'react'
 
export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null)
  return (
    <Layout user={user} setUser={setUser}>
      <Component {...pageProps} />
    </Layout>
  )
}