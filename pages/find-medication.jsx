import { useEffect } from 'react';
import Head from 'next/head'

import RequestForm from '@/components/RequestForm/RequestForm.jsx';

import { Box } from '@mui/material';

export default function FindMedicationPage({ user }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{maxWidth: "1200px", margin: "auto", display: "flex", alignItems: "center", flexDirection: "column"}}>
        <Head>
            <title>Medication Search - KOW</title>
            <meta 
                name='description' 
                content='Search for your prescription medication and find out which nearby pharmacy has it available today!'
            />   
            <link rel='canonical' href='/find-medication'/>
        </Head>
        <RequestForm user={user}/> 
    </Box>
  );
}
