import { useRef } from 'react'
import Link from 'next/link';

import PharmacySubscriptionText from '@/components/Documents/PharmacySubscription/PharmacySubscriptionText.jsx'
import { useUser } from '@/context/user';
import Page404 from '@/pages/404';
import { styles } from './PharmacySignedAgreement-styles'

import { Box, Button } from '@mui/material'
import { useReactToPrint } from 'react-to-print';

export default function PharmacySignedAgreement({ pharmacy }) {
    const { isAuthenticated } = useUser()
    const printableComponent = useRef();

    
    const handlePrint = useReactToPrint({
        content: () => printableComponent.current,
    });
    
    if (!isAuthenticated) return <Page404 isAuthFailure={!isAuthenticated} />
    
  return (
        <Box sx={styles.MainContainer}>
            <Box sx={styles.buttonsContainer}>
                <Link href={`/dashboard/pharmacies/${pharmacy.id}`} style={{color: "#154161"}}>
                    Return to Pharmacy Page
                </Link>
                <Button onClick={handlePrint} variant='contained' size='large' fullWidth>Print</Button>
            </Box>
            <Box ref={printableComponent} sx={{padding: "20px"}}>
                <PharmacySubscriptionText pharmacy={pharmacy} enrollmentData={pharmacy}/>
            </Box>
        </Box>
  )
}

