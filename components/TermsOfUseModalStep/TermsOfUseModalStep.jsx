import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import { styles } from './TermsOfUseModalStep-styles.js';

import { Button, Box, Typography } from '@mui/material'
import TermsText from '@/components/Documents/TermsOfUse/TermsText.jsx';
// import '../Documents/TermsOfUse/Terms.module.css'

export default function TermsOfServiceModalStep({ setStep }) {
    // const navigate = useNavigate()
    const [isDisabled, setDisabled] = useState(true)
    const scrollRef = useBottomScrollListener(() => setDisabled(false))

    return (
        <Box sx={styles.MainContainer}>
            <Typography variant='h3' sx={{fontWeight: "bold", fontSize: {xs: "2rem", sm: "2.5rem", md:"3rem"}}}>Terms of Use</Typography>
            <Box ref={scrollRef} sx={styles.scrollContainer}>
                <TermsText isModal={true}/>
            </Box>
            <Box sx={styles.buttonsContainer}>
                <Button variant='contained' disabled={isDisabled} sx={{color: "white"}} size="large" onClick={() => setStep((val) => val + 1)} >
                    Agree & Continue
                </Button>
            </Box>
            {/* <Button sx={{position: "absolute", left: "5px", bottom: "0px"}} size="large" onClick={() => navigate("/")}>CANCEL</Button> */}
        </Box>
    );
}