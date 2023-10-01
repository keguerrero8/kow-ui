import { useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

import pharmacyService from '@/lib/pharmacyService';
import RequestFormInput from '@/components/RequestFormInput/RequestFormInput.jsx'
import FormGenericDropDown from '@/components/FormGenericDropDown/FormGenericDropDown.jsx';
import PharmacyEnrollmentTermsModal from '@/components/PharmacyEnrollmentTermsModal/PharmacyEnrollmentTermsModal.jsx';
import PharmacyEnrollmentOptInModal from '@/components/PharmacyEnrollmentOptInModal/PharmacyEnrollmentOptInModal.jsx';
import { useUser } from '@/context/user';
import Page404 from '@/pages/404';

import { Box, Typography, TextField, Button, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio, Checkbox } from '@mui/material'
import { styles } from './PharmacyEnrollmentForm-styles'

export default function PharmacyEnrollment({ pharmacy }) {
    const { isAuthenticated, user } = useUser()
    const router = useRouter()
    const defaultEnrollmentData = {
        additional_language: "none",
        contact_name: "",
        contact_title: "",
        contact_email: "",
        contact_phone_number: "",
        npi: "",
        signature: "",
        network: "",
        initial_rate: "",
        isDelivery: false
    }

    const [checkedPrivacy, setCheckedPrivacy] = useState(false)
    const [checkedOptIn, setCheckedOptIn] = useState(false)
    const [enrollmentData, setEnrollmentData] = useState(defaultEnrollmentData)
    const [isDisabled, setIsDisabled] = useState(false)
    const [status, setStatus] = useState([])
    const [isAgreementTermsModal, setIsAgreementTermsModal] = useState(false)
    const [isAgreementOptInModal, setIsAgreementOptInModal] = useState(false)
    const [stepPrivacy, setStepPrivacy] = useState(1)
    const [stepOptIn, setStepOptIn] = useState(1)
    const [isPrivacyAcknowledged, setisPrivacyAcknowledged] = useState(false)
    const [isOptInAcknowledged, setisOptInAcknowledged] = useState(false)
    const [networkSearchValue, setNetworkSearchValue] = useState("")
    const [languageSearchValue, setLanguageSearchValue] = useState("")

    if (!isAuthenticated) return <Page404 isAuthFailure={!isAuthenticated} />

    const networkMap = {
        "Single Rx Referrals": "Single",
        "Batch Rx Referrals (N/A)": "Batch",
        "Compound Rx Referrals (N/A)": "Compound",
        "Specialty Rx Referrals (N/A)": "Specialty"
    }

    const additionalLanguageMap = {
        "Bengali": "bengali",
        "Chinese": "chinese",
        "Korean": "korean",
        "Russian": "russian",
        "Spanish": "spanish",
    }

    const dropDownMaps = {
        "network": networkMap,
        "additional_language": additionalLanguageMap
    }

    const updatePharmacy = async (obj) => {
        const finalEnrollmentData = {
            ...obj, 
            signed_agreement_admin: `${user.first_name} ${user.last_name}`, 
            contact_phone_number: "+1" + enrollmentData["contact_phone_number"],
            additional_language: languageSearchValue === "" ? "none" : enrollmentData["additional_language"]
        }
        const response = await pharmacyService.updateEnrolledPharmacy(pharmacy.id, finalEnrollmentData)
        
        if (!response.error) {
            setStatus(["Successfully enrolled the pharmacist!"])
            setIsDisabled(true)
            setTimeout(() => router.push("/pharmacy-enrolled"), 1000)
          } else {
            const error_messages = Object.entries(response.error).map(e => `${e[0].replaceAll("_", " ")}: ${e[1]}`)
            setStatus(error_messages)
        }
    }

    function handleChange (e, dropDownKey = null) {
        if (dropDownKey) {
            setEnrollmentData({
                ...enrollmentData,
                [dropDownKey]: dropDownMaps[dropDownKey][e.target.innerText]
            })
        }
        else {
            setEnrollmentData({
                ...enrollmentData,
                [e.target.name]: e.target.value
            })
        }
    }

    const handlePrivacyCheck = (e) => {
        if (e.target.checked) {
            setIsAgreementTermsModal(true)
        }
  
      setCheckedPrivacy(e.target.checked)
    }

    const handleOptInCheck = (e) => {
        if (e.target.checked) {
            setIsAgreementOptInModal(true)
        }
  
      setCheckedOptIn(e.target.checked)
    }

    function handleClear () {
        setStatus([])
        setEnrollmentData(defaultEnrollmentData)
        setIsDisabled(false)
        setisPrivacyAcknowledged(false)
        setisOptInAcknowledged(false)
        setCheckedPrivacy(false)
        setCheckedOptIn(false)
        setStepPrivacy(1)
        setStepOptIn(1)
        setNetworkSearchValue("")
        setLanguageSearchValue("")
    }

    function handleSubmit (e) {
        e.preventDefault()
        updatePharmacy(enrollmentData)
    }

    function handleDeliveryRadio (e) {
        setEnrollmentData({
            ...enrollmentData,
            isDelivery: e.target.value === "yes"
        })
    }

    return (
        <Box sx={styles.MainContainer} component="form" onSubmit={handleSubmit}>
            <PharmacyEnrollmentTermsModal 
                setIsAgreementModal={setIsAgreementTermsModal} 
                isAgreementModal={isAgreementTermsModal} 
                step={stepPrivacy} 
                setStep={setStepPrivacy} 
                isPrivacyAcknowledged={isPrivacyAcknowledged}
                setisPrivacyAcknowledged={setisPrivacyAcknowledged}
                />
            <PharmacyEnrollmentOptInModal 
                setIsAgreementModal={setIsAgreementOptInModal} 
                isAgreementModal={isAgreementOptInModal} 
                step={stepOptIn} 
                setStep={setStepOptIn} 
                isOptInAcknowledged={isOptInAcknowledged}
                setisOptInAcknowledged={setisOptInAcknowledged}
                pharmacy={pharmacy}
                enrollmentData={enrollmentData}
            />
            <Box sx={{my: "40px"}}>
                <Link href={`/dashboard/pharmacies/${pharmacy.id}`} style={{color: "#154161"}}>
                Return to Pharmacy Page
                </Link>
            </Box>
            <Box sx={{mb: "10px"}}>
                <Typography component="div" variant="h4" sx={{fontWeight: "bolder", mb: "10px"}}>{pharmacy.name}</Typography>
                <Typography component="div" variant="h6" sx={{fontWeight: 400, my: "10px"}}>{pharmacy.address}</Typography>
                <Typography component="div" variant="h6" sx={{fontWeight: 400, my: "10px"}}>Zipcode: {pharmacy.zipcode}</Typography>
                <Typography component="div" variant="h6" sx={{fontWeight: 400, my: "10px"}}>{pharmacy.phone_number? pharmacy.phone_number.replace("+", "") : null}</Typography>
            </Box>
            <Box sx={styles.FieldsContainer}>
                <Box>
                    <RequestFormInput 
                        requestData={enrollmentData} 
                        flex={1} 
                        label="Initial Rate" 
                        name="initial_rate" 
                        handleChange={handleChange} 
                        key="Initial Rate"
                        isRequired={true}
                    />
                    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", mt: "10px"}}>
                        <Typography color="black" component="h6">KOW member:</Typography>
                        <TextField sx={{width: "40%"}} value={`${user.first_name} ${user.last_name}`} variant="standard"/>
                    </Box> 
                </Box>
                {
                    [
                        {flex: 1, label: "Contact Name", name: "contact_name", placeholder: "Please provide your contact name"}, 
                        {flex: 1, label: "Contact Title", name: "contact_title", placeholder: "Please provide your title"}, 
                        {flex: 1, label: "Contact Email", name: "contact_email", placeholder: "Please provide your email"}, 
                        {flex: 1, label: "Contact Phone Number", name: "contact_phone_number", placeholder: "Please enter 10 digits"}, 
                        {flex: 1, label: "Pharmacy NPI", name: "npi", placeholder: "Please provide your Pharmacy NPI"}
                    ]
                    .map(i => 
                        <RequestFormInput 
                            requestData={enrollmentData} 
                            flex={i.flex} 
                            label={i.label} 
                            name={i.name} 
                            handleChange={handleChange} 
                            key={i.label} 
                            isRequired={true}
                            placeholder={i.placeholder}
                        />)
                }
                <FormGenericDropDown
                    label="Network"
                    name="network"
                    handleChange={handleChange}
                    isRequired={true}
                    options={Object.keys(networkMap)}
                    searchValue={networkSearchValue}
                    setSearchValue={setNetworkSearchValue}
                    placeholder="Select a Pharmacy Network"
                />
                <FormGenericDropDown
                    label="Additional Language"
                    name="additional_language"
                    handleChange={handleChange}
                    isRequired={false}
                    options={Object.keys(additionalLanguageMap)}
                    searchValue={languageSearchValue}
                    setSearchValue={setLanguageSearchValue}
                    placeholder="Select an additional language if applicable"
                />
                <FormControl sx={{margin: "10px auto", textAlign: "center"}}>
                    <FormLabel sx={{mb: "5px"}}>
                        <Typography color="black" variant="h6" sx={styles.UserType}>
                            Does this pharmacy provide delivery options?<span style={{color: "red"}}> &#42;</span>
                        </Typography>
                    </FormLabel>
                    <RadioGroup
                        onChange={handleDeliveryRadio}
                        row
                        defaultValue="no"
                    >
                        <Box sx={{margin: "auto"}}>                        
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </Box>
                    </RadioGroup>
                </FormControl>
                <Box sx={{textAlign: "center", width: "100%", marginTop: "2rem", marginX: "auto", display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                    <FormControlLabel
                        labelPlacement='end'
                        control={<Checkbox checked={checkedPrivacy} onChange={handlePrivacyCheck}/>} 
                        label={<Typography variant='h5' sx={{fontSize: "1.1rem", fontWeight: "bolder", textAlign: "start"}}>I AGREE TO KOW&apos;S TERMS OF USE AND PRIVACY POLICY</Typography>} 
                    />
                </Box>
                <Box sx={{textAlign: "center", width: "100%", marginTop: "-1rem", marginX: "auto", display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                    <FormControlLabel
                        disabled={enrollmentData["contact_name"] === "" || enrollmentData["contact_title"] === ""}
                        labelPlacement='end'
                        control={<Checkbox checked={checkedOptIn} onChange={handleOptInCheck}/>} 
                        label={<Typography variant='h5' sx={{fontSize: "1.1rem", fontWeight: "bolder", textAlign: "start"}}>I AGREE TO KOW&apos;S PHARMACY SUBSCRIPTION AND OPT-IN AGREEMENTS</Typography>} 
                    />
                </Box>
                <Box sx={{flex: 1, mt: "50px"}}>
                    <Typography color="black" component="" sx={{mt: "-2rem", mb: "2rem", fontSize: {xs: "0.5rem", sm: "0.8rem", md: "1rem"}}}>
                    You acknowledge and agree that the typed name You provided shall be deemed an original signature for purposes of this Agreement. By typing Your name below, You agree to be bound by the terms, conditions, covenants, and obligations of Your subscription, including without limitation those set forth in the Subscription Agreement, Opt-in, Privacy Policy, and Terms of Use. 
                    </Typography>
                    <Typography color="black" component="h6" sx={{mb: "5px", fontSize: {xs: "1rem", sm: "1rem", md: "1.4rem"}}}>
                    FULL NAME<span style={{color: "red"}}> &#42;</span>
                    </Typography>
                    <TextField sx={{width: "100%"}} onChange={handleChange} value={enrollmentData["signature"]} name="signature" placeholder="Please type your full name"/>
                </Box>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem"}}>
                    <Typography color="black" component="h6">Title:</Typography>
                    <TextField sx={{width: "40%"}} value={enrollmentData["contact_title"]} variant="standard"/>
                </Box> 
            </Box>
            <Box sx={{textAlign: "center", width: "80%", margin: "0 auto"}}>
            {status.map((e, index) => 
                <Typography key={index} sx={{color: status[0] === "Successfully enrolled the pharmacist!"? "green" : "red"}}>{e}</Typography>)}
            </Box>
            <Box sx={styles.ButtonsContainer}>
                <Button variant='contained' sx={{color: "white", width: "30%"}} size="large" type="submit" disabled={isDisabled || enrollmentData["signature"] === "" || !isPrivacyAcknowledged || !isOptInAcknowledged || !checkedPrivacy || !checkedOptIn}>
                {/* <Button variant='contained' sx={{color: "white", width: "30%"}} size="large" type="submit" disabled={enrollmentData["signature"] === ""}>     */}
                    Submit
                </Button>
                <Button variant='text' sx={{color: "#154161", width: "40%"}} size="large" onClick={handleClear} >
                    Reset Form
                </Button>
            </Box>
        </Box>
    )
}
