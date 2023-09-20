import { Modal, Box } from '@mui/material'

import TermsOfUseModalStep from '@/components/TermsOfUseModalStep/TermsOfUseModalStep.jsx'
import PrivacyPolicyModalStep from '@/components/PrivacyPolicyModalStep/PrivacyPolicyModalStep.jsx'
import ProviderOptInModalStep from '@/components/ProviderOptInModalStep/ProviderOptInModalStep.jsx'

export default function RequestAgreementModal( { 
    setIsAgreementModal, 
    isAgreementModal, 
    setStep, 
    step, 
    userType, 
    isPrivacyAcknowledged, 
    setisPrivacyAcknowledged, 
    isOptInAcknowledged, 
    setisOptInAcknowledged 
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

    const isPatientFinalStep = step === 2 && userType === "patient" && isPrivacyAcknowledged
    const isHCPFinalStep = step === 3 && userType === "health_care_provider" && isOptInAcknowledged
    const handleClose = () => {
        if (isPatientFinalStep || isHCPFinalStep) setIsAgreementModal(false)
    }

    const agreementStep = {
        1: <TermsOfUseModalStep setStep={setStep}/>,
        2: <PrivacyPolicyModalStep setStep={setStep} userType={userType} isAcknowledged={isPrivacyAcknowledged} setIsAcknowledged={setisPrivacyAcknowledged} setIsAgreementModal={setIsAgreementModal}/>,
        3: <ProviderOptInModalStep isAcknowledged={isOptInAcknowledged} setIsAcknowledged={setisOptInAcknowledged} setIsAgreementModal={setIsAgreementModal}/>
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

