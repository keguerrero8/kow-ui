import { useEffect } from 'react';
import Head from 'next/head'

import RequestForm from '@/components/RequestForm/RequestForm.jsx';

import { Box } from '@mui/material';

export const getStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.DJANGO_API_URL}/api/medications`)
    const medications = await res.json()
    return { props: { medications } }
  } catch (error) {
    return { props: { medications: [] } }
  }
}

export default function FindMedicationPage({ medications }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Medication Search - KOW</title>
        <meta 
            name='description' 
            content='Search for your prescription medication and find out which nearby pharmacy has it available today!'
        />   
        <link rel='canonical' href='/find-medication'/>
      </Head>
      <Box sx={{maxWidth: "1200px", margin: "auto", display: "flex", alignItems: "center", flexDirection: "column"}}>
        <RequestForm medications={medications}/> 
      </Box>
    </>
  );
}
