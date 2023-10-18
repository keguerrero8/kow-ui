import { useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

import pharmacyService from '@/lib/pharmacyService';
import CheckboxModal from '@/components/CheckboxModal/CheckboxModal';
import TermsText from '@/components/Documents/TermsOfUse/TermsText';
import PrivacyText from '@/components/Documents/PrivacyPolicy/PrivacyText';
import PharmacySubscriptionText from '@/components/Documents/PharmacySubscription/PharmacySubscriptionText'
import PharmacyConsentText from '@/components/Documents/PharmacyOptIn/PharmacyConsentText.jsx'
import RequestFormInput from '@/components/RequestFormInput/RequestFormInput.jsx'
import FormGenericDropDown from '@/components/FormGenericDropDown/FormGenericDropDown.jsx';
import { useUser } from '@/context/user';
import Page404 from '@/pages/404';

import { Box, Typography, TextField, Button, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio } from '@mui/material'
import { stylesMui } from './PharmacyEnrollmentForm-styles'
import styles from './PharmacyEnrollmentForm.module.css'

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

    const [enrollmentData, setEnrollmentData] = useState(defaultEnrollmentData)
    const [isDisabled, setIsDisabled] = useState(false)
    const [status, setStatus] = useState([])
    const [networkSearchValue, setNetworkSearchValue] = useState("")
    const [languageSearchValue, setLanguageSearchValue] = useState("")
    const [isTermsAcknowledged, setisTermsAcknowledged] = useState(false)
    const [isPharmacySubscriptionAcknowledged, setisPharmacySubscriptionAcknowledged] = useState(false)

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

    function handleClear () {
        setStatus([])
        setEnrollmentData(defaultEnrollmentData)
        setIsDisabled(false)
        setisTermsAcknowledged(false)
        setisPharmacySubscriptionAcknowledged(false)
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
        <Box sx={stylesMui.MainContainer} component="form" onSubmit={handleSubmit}>
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
            <Box sx={stylesMui.FieldsContainer}>
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
                            Does this pharmacy offer delivery options?<span style={{color: "red"}}> &#42;</span>
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
                <div className={styles.agreements}>
                    <div>
                        <CheckboxModal
                            checkboxText="I agree to KOW's "
                            linkText='Terms and Privacy Policy'
                            modalContent1={<TermsText isModal={true}/>}
                            modalContent2={<PrivacyText isModal={true}/>}
                            setisAcknowledged={setisTermsAcknowledged}
                            isAcknowledged={isTermsAcknowledged}
                        />
                    </div>
                    <div>
                        <CheckboxModal
                            checkboxText="I agree to KOW's "
                            linkText='Pharmacy Subscription and Opt-in Agreements'
                            modalContent1={<PharmacySubscriptionText isModal={true} pharmacy={pharmacy} enrollmentData={enrollmentData}/>}
                            modalContent2={<PharmacyConsentText isModal={true}/>}
                            setisAcknowledged={setisPharmacySubscriptionAcknowledged}
                            isAcknowledged={isPharmacySubscriptionAcknowledged}
                        />
                    </div>
                </div>
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
            <Box sx={stylesMui.ButtonsContainer}>
                <Button variant='contained' sx={{color: "white", width: "30%"}} size="large" type="submit" disabled={isDisabled || enrollmentData["signature"] === "" || !isTermsAcknowledged || !isPharmacySubscriptionAcknowledged}>
                    Submit
                </Button>
                <Button variant='text' sx={{color: "#154161", width: "40%"}} size="large" onClick={handleClear} >
                    Reset Form
                </Button>
            </Box>
        </Box>
    )
}
