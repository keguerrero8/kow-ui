import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Typography } from '@mui/material';

import { useUser } from '@/context/user';
import Page404 from '@/pages/404';

const styles = {
  MainContainer: {
      maxWidth: "800px", 
      margin: "30px auto 80px", 
      display: "flex", 
      alignItems: "center", 
      paddingX: "50px", 
      paddingY: "50px",
      justifyContent: "center", 
      flexDirection: "column",
      textAlign: "center",
      gap: "2rem"
  },
}

export default function SplashPage() {
  const { isAuthenticated } = useUser()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const router = useRouter();

  if (!isAuthenticated) return <Page404 isAuthFailure={!isAuthenticated}/>
  
  return (
    <Box sx={styles.MainContainer}>
      <Typography sx={{fontSize: 'var(--font-large)', color: 'var(--brand-primaryblue)', fontWeight: '900'}}>
        Thank you for joining our pharmacy network.</Typography>
      <Typography sx={{fontSize: 'var(--font-medium)', fontWeight: '900', color: 'var(--brand-green)', textAlign: 'center', paddingBottom: '7.5vh'}}>We look forward to working with you!</Typography>
      <Box>
        <Button variant='contained' size="large" onClick={() => router.push("/")}>Return To Home Page</Button>
      </Box>
    </Box>
  )
}
