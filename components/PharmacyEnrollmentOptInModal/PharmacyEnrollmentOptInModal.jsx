import { Modal, Box } from '@mui/material'

import PharmacySubscriptionModalStep from '@/components/PharmacySubscriptionModalStep/PharmacySubscriptionModalStep.jsx';
import PharmacyOptInModalStep from '@/components/PharmacyOptInModalStep/PharmacyOptInModalStep.jsx'

export default function PharmacyEnrollmentOptInModal( { 
    setIsAgreementModal, 
    isAgreementModal, 
    setStep, 
    step, 
    isOptInAcknowledged, 
    setisOptInAcknowledged,
    pharmacy,
    enrollmentData
}) {
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {xs: "95%", sm: "90%", md: "80%", lg: "900px"},
        height: "80%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const isFinalStep = step === 2 && isOptInAcknowledged
    const handleClose = () => {
        if (isFinalStep) setIsAgreementModal(false)
    }

    const agreementStep = {
        1: <PharmacySubscriptionModalStep setStep={setStep} pharmacy={pharmacy} enrollmentData={enrollmentData}/>,
        2: <PharmacyOptInModalStep setStep={setStep} isAcknowledged={isOptInAcknowledged} setIsAcknowledged={setisOptInAcknowledged} setIsAgreementModal={setIsAgreementModal}/>
    }
    
  return (
    <Modal
    open={isAgreementModal}
    onClose={handleClose}
    >
        <Box sx={style}>
            {agreementStep[step]}
        </Box>
    </Modal>
  )
}

