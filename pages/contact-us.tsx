import { useEffect } from 'react';
import Head from 'next/head'
import { NextPage } from 'next';

import ContactSection from '@/components/ContactSection/ContactSection.jsx';

const ContactUsPage: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Contact Us - KOW Support</title>
        <meta 
            name='description' 
            content='Email us. Leave us a message. If you have a question or feedback about our services, please leave us a detailed message and we’ll get back to you as possible.'
        />   
        <link rel='canonical' href='/contact-us'/>
      </Head>
      <ContactSection/>
    </>
  );
}

export default ContactUsPage
