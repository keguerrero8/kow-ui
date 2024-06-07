import Head from 'next/head'
import { NextPage } from 'next'

import HeroSection from '@/components/HeroSection/HeroSection'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>KOW: Find Pharmacies with your Medication Today</title>
        <meta name="description" content="Your medication may not always be in stock at the pharmacy. Use KOW to find a local pharmacy that has your prescription medication. KOW contacts several neighborhood pharmacies and immediately notifies you when any of them confirm they have your medication in stock." />
        <link rel='canonical' href='/'/>
        {/* the below has been added by next js bootstrap */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
    </>
  )
}

export default HomePage