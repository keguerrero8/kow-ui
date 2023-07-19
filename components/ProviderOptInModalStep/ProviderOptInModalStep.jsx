import { useState } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import { styles } from './ProviderOptInModalStep-styles.js';
import stylesButton from '../Button/Button.module.css'
import Button from '@/components/Button/Button'

import { Button as MuiButton, Box, Typography } from '@mui/material'
import ProviderOptInText from '@/components/Documents/ProviderOptIn/ProviderOptInText.jsx';

export default function ProviderOptInModalStep({ setIsAcknowledged, setIsAgreementModal }) {
    const [disabled, setDisabled] = useState(true)
    const scrollRef = useBottomScrollListener(() => setDisabled(false))

    const handleAgreementExit = () => {
        setIsAcknowledged(true)
        setIsAgreementModal(false)
    }  

    return (
        <Box sx={styles.MainContainer}>
            <Typography variant='h3' sx={{fontWeight: "bold", fontSize: {xs: "2rem", sm: "2.5rem", md:"3rem"}}}>Provider Opt In Agreement</Typography>
            <Box ref={scrollRef} sx={styles.scrollContainer}>
                <ProviderOptInText isModal={true}/>
            </Box>
            <Box sx={styles.buttonsContainer}>
                <MuiButton variant='contained' disabled={disabled} sx={{color: "white"}} size="medium" onClick={handleAgreementExit} >
                    Agree & Close
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