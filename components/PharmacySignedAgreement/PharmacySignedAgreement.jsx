import { useRef } from 'react'
import Link from 'next/link';

import PharmacySubscriptionText from '@/components/Documents/PharmacySubscription/PharmacySubscriptionText.jsx'
// import Page404 from '../../Pages/Page404'
import { styles } from './PharmacySignedAgreement-styles'

import { Box, Button } from '@mui/material'
import { useReactToPrint } from 'react-to-print';

// export default function PharmacySignedAgreement({user}) {
export default function PharmacySignedAgreement({ pharmacy }) {
    const printableComponent = useRef();

    
    const handlePrint = useReactToPrint({
        content: () => printableComponent.current,
    });
    
    // if (!user) return <Page404 isAuthFailure={true} />
    
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

