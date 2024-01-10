import { useEffect } from 'react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head'

import RequestForm from '@/components/RequestForm/RequestForm.jsx';

import { Box } from '@mui/material';

type MedicationPageProps = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.DJANGO_API_URL}/core/medications`)
    const medications: Medication[] = await res.json()
    return { props: { medications } }
  } catch (error) {
    return { props: { medications: [] } }
  }
}

const FindMedicationPage: NextPage = ({ medications }: MedicationPageProps) => {
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

export default FindMedicationPage