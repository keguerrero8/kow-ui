import { useEffect } from 'react';
import Head from 'next/head'

import HowSection from '@/components/HowSection/HowSection.jsx';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <>
        <Head>
            <title>About KOW: How It Works</title>
            <meta name="description" content="Learn more about KOW and how our platform connects you with your neighborhood pharmacies. We contact them simultaneously for you when you’re looking for your prescription medication.  You’ll then be notified of which of them have your medication in stock today." />
            <link rel='canonical' href='/how-it-works'/>
        </Head>
        <HowSection />
        </>
    )
}
