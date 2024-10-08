import { useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { NextPage } from 'next';
import { Box, Button, Typography } from '@mui/material';

const styles = {
  MainContainer: {
      maxWidth: "1200px", 
      margin: "30px auto 80px", 
      display: "flex", 
      alignItems: "center", 
      paddingX: "50px", 
      justifyContent: "center", 
      flexDirection: "column",
  },
}

const Page505: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const router: NextRouter = useRouter();
  
  return (
    <Box sx={styles.MainContainer}>
      <Typography sx={{fontSize: 'var(--font-xxlarge)', color: 'var(--brand-primaryblue)', fontWeight: '900'}}>
        ERROR</Typography>
      <Typography sx={{fontSize: 'var(--font-large)', fontWeight: '900', color: 'var(--brand-green)', textAlign: 'center'}}>Sorry, an internal Server error occurred</Typography>
      <Typography sx={{fontSize: 'var(--font-small)', paddingBottom: '7.5vh'}}>Please contact us about any issues you are experiencing.</Typography>
      <Box>
        <Button variant='contained' size="large" onClick={() => router.push("/")}>Return To Home Page</Button>
      </Box>
    </Box>
  )
}

export default Page505