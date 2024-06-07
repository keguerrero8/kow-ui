import { useState } from 'react';
import { useRouter } from 'next/router';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import { styles } from './PharmacyOptInModalStep-styles';
import PharmacyConsentText from '../../Documents/PharmacyOptIn/PharmacyConsentText.jsx';

import { Button, Box, Typography } from '@mui/material'

function PharmacyOptInModalStep({ setIsAcknowledged, setIsAgreementModal }) {
    const router = useRouter()
    const [disabled, setDisabled] = useState(true)
    const scrollRef = useBottomScrollListener(() => setDisabled(false))

    const handleAgreementExit = () => {
        setIsAcknowledged(true)
        setIsAgreementModal(false)
    }  

    return (
        <Box sx={styles.MainContainer}>
            <Typography variant='h3' sx={{fontWeight: "bold", fontSize: {xs: "2rem", sm: "2.5rem", md:"3rem"}}}>Pharmacy Opt In Agreement</Typography>
            <Box ref={scrollRef} sx={styles.scrollContainer}>
                <PharmacyConsentText isModal={true}/>
            </Box>
            <Box sx={styles.buttonsContainer}>
                <Button variant='contained' disabled={disabled} sx={{color: "white"}} size="medium" onClick={handleAgreementExit} >
                    Agree & Close
                </Button>
            </Box>
            <Button sx={{position: "absolute", left: "5px", bottom: "0px"}} size="large" onClick={() => router.push("/")}>CANCEL</Button>
        </Box>
    );
}

export default PharmacyOptInModalStep;