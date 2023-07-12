import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import {styles} from './PrivacyPolicyModalStep-styles.js';

import { Button, Box, Typography } from '@mui/material'
// import PrivacyText from '../Documents/PrivacyPolicy/PrivacyText.js';

export default function PrivacyPolicyModalStep({ setStep, userType, setIsAcknowledged, setIsAgreementModal }) {
    // const navigate = useNavigate()
    const [disabled, setDisabled] = useState(true)
    const scrollRef = useBottomScrollListener(() => setDisabled(false))

    const handleAgreementContinue = () => {
        setIsAcknowledged(true)
        setStep((val) => val + 1)
    }

    const handleAgreementExit = () => {
        setIsAcknowledged(true)
        setIsAgreementModal(false)
    }  


    return (
        <Box sx={styles.MainContainer}>
            <Typography variant='h3' sx={{fontWeight: "bold", fontSize: {xs: "2rem", sm: "2.5rem", md:"3rem"}}}>Privacy Policy</Typography>
            <Box ref={scrollRef} sx={styles.scrollContainer}>
                {/* <PrivacyText isModal={true}/> */}
            </Box>
            <Box sx={styles.buttonsContainer}>
                {userType === "health_care_provider"? (
                        <Button variant='contained' disabled={disabled} sx={{color: "white"}} size="medium" onClick={handleAgreementContinue} >
                            Agree & Continue
                        </Button>
                    ) : (
                        <Button variant='contained' disabled={disabled} sx={{color: "white"}} size="medium" onClick={handleAgreementExit} >
                            Agree & Close
                        </Button>
                    )
                }
            </Box>
            {/* <Button sx={{position: "absolute", left: "5px", bottom: "0px"}} size="large" onClick={() => navigate("/")}>CANCEL</Button> */}
        </Box>
    );
}