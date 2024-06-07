import { useState } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import {styles} from './PrivacyPolicyModalStep-styles.js';
import stylesButton from '../Button/Button.module.css'
import Button from '@/components/Button/Button'

import { Button as MuiButton, Box, Typography } from '@mui/material'
import PrivacyText from '@/components/Documents/PrivacyPolicy/PrivacyText.jsx';

export default function PrivacyPolicyModalStep({ setStep, userType, setIsAcknowledged, setIsAgreementModal }) {
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
                <PrivacyText isModal={true}/>
            </Box>
            <Box sx={styles.buttonsContainer}>
                {userType === "health_care_provider"? (
                        <MuiButton variant='contained' disabled={disabled} sx={{color: "white"}} size="medium" onClick={handleAgreementContinue} >
                            Agree & Continue
                        </MuiButton>
                    ) : (
                        <MuiButton variant='contained' disabled={disabled} sx={{color: "white"}} size="medium" onClick={handleAgreementExit} >
                            Agree & Close
                        </MuiButton>
                    )
                }
            </Box>
            <Box sx={{position: "absolute", left: "5px", bottom: "5px"}}>
                <Button 
                className={stylesButton.btn}
                buttonStyle={stylesButton.btnTertiary} 
                buttonSize={stylesButton.btnSmall} 
                buttonPage={stylesButton.btnCancel} 
                path='/'>
                    CANCEL
                </Button>
            </Box>
        </Box>
    );
}