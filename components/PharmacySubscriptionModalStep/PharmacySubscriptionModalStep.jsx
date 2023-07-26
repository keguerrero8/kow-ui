import { useState } from 'react';
import { useRouter } from 'next/router';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import { styles } from './PharmacySubscriptionModalStep-styles.js';

import { Button, Box, Typography } from '@mui/material'
import PharmacySubscriptionText from '@/components/Documents/PharmacySubscription/PharmacySubscriptionText.jsx';
import '@/components/Documents/PharmacySubscription/PharmacySubscription.module.css'

function PharmacySubscriptionModalStep({ setStep, pharmacy, enrollmentData }) {
    const router = useRouter()
    const [isDisabled, setDisabled] = useState(true)
    const scrollRef = useBottomScrollListener(() => setDisabled(false))

    return (
        <Box sx={styles.MainContainer}>
            <Typography variant='h3' sx={{fontWeight: "bold", fontSize: {xs: "2rem", sm: "2.5rem", md:"3rem"}}}>Pharmacy Subscription Agreement</Typography>
            <Box ref={scrollRef} sx={styles.scrollContainer}>
                <PharmacySubscriptionText isModal={true} pharmacy={pharmacy} enrollmentData={enrollmentData}/>
            </Box>
            <Box sx={styles.buttonsContainer}>
                <Button variant='contained' disabled={isDisabled} sx={{color: "white"}} size="large" onClick={() => setStep((val) => val + 1)} >
                    Agree & Continue
                </Button>
            </Box>
            <Button sx={{position: "absolute", left: "5px", bottom: "0px"}} size="large" onClick={() => router.push("/")}>CANCEL</Button>
        </Box>
    );
}

export default PharmacySubscriptionModalStep;