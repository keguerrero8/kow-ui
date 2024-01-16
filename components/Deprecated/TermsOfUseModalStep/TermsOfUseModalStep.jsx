import { useState } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import { styles } from './TermsOfUseModalStep-styles.js';
import stylesButton from '../Button/Button.module.css'
import Button from '@/components/Button/Button'

import { Button as MuiButton, Box, Typography } from '@mui/material'
import TermsText from '@/components/Documents/TermsOfUse/TermsText.jsx';

export default function TermsOfServiceModalStep({ setStep }) {
    const [isDisabled, setDisabled] = useState(true)
    const scrollRef = useBottomScrollListener(() => setDisabled(false))

    return (
        <Box sx={styles.MainContainer}>
            <Typography variant='h3' sx={{fontWeight: "bold", fontSize: {xs: "2rem", sm: "2.5rem", md:"3rem"}}}>Terms of Use</Typography>
            <Box ref={scrollRef} sx={styles.scrollContainer}>
                <TermsText isModal={true}/>
            </Box>
            <Box sx={styles.buttonsContainer}>
                <MuiButton variant='contained' disabled={isDisabled} sx={{color: "white"}} size="large" onClick={() => setStep((val) => val + 1)} >
                    Agree & Continue
                </MuiButton>
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