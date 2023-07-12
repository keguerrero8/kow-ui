import React, { useState, useEffect } from 'react'
// import Cookies from "js-cookie"

import RequestFormInput from '@/components/RequestFormInput/RequestFormInput.jsx'
import MedNameRequestInput from '@/components/MedNameRequestInput/MedNameRequestInput.jsx'
import MedStrengthRequestInput from '@/components/MedStrengthRequestInput/MedStrengthRequestInput.jsx'
import RequestAgreementModal from '@/components/RequestAgreementModal/RequestAgreementModal'
// import CSRFToken from '../CSRFToken/CSRFToken'
import { styles } from './RequestForm-styles'

import { 
    Box, 
    Button, 
    Typography,
    Radio, 
    RadioGroup, 
    FormControl, 
    FormControlLabel,
    FormLabel, 
    Checkbox,
    Link
} from '@mui/material'

export default function RequestForm({ user }) {
  const defaultRequestData = {
    phone_number: "",
    med_name: "",
    med_strength: "",
    quantity: "",
    bin: "",
    pcn: "",
    rxgroup: "",
    isInsurance: true,
    user_type: "",
    isAdmin: false
  }
  const [checked, setChecked] = useState(false)
  const [medication, setMedication] = useState({})
  const [medications, setMedications] = useState([])
  const [value, setValue] = useState("insurance")
  const [status, setRequestStatus] = useState([])
  const [isDisabled, setDisabled] = useState(true)
  const [searchValue, setSearchValue] = useState("")
  const [requestData, setRequestData] = useState(defaultRequestData)
  const [isAgreementModal, setIsAgreementModal] = useState(false)
  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState("")
  const [isPrivacyAcknowledged, setisPrivacyAcknowledged] = useState(false)
  const [isOptInAcknowledged, setisOptInAcknowledged] = useState(false)
  const [showHelp, setShowHelp] = useState(false)

//   useEffect(() => {
//     fetch("http://localhost:8000/api/medications")
//     .then(res => res.json())
//     .then(r => setMedications(r))
//   }, [])

  const handleAgreementCheck = (e) => {
    if (e.target.checked) {
        setIsAgreementModal(true)
    }

    setChecked(e.target.checked)
  }

  function handleClear () {
    setChecked(false)
    setRequestData(defaultRequestData)
    setValue("insurance")
    setDisabled(true)
    setRequestStatus([])
    setMedication({})
    setSearchValue("")
    setStep(1)
    setisPrivacyAcknowledged(false)
    setisOptInAcknowledged(false)
    setUserType("")
  }

  function handlePaymentRadioChange (e) {
    setValue(e.target.value)
    setRequestData({
        ...requestData,
        isInsurance: e.target.value === "insurance"? true : false
    })
  }

  function handleUserTypeRadioChange (e) {
    setStep(1)
    setisPrivacyAcknowledged(false)
    setisOptInAcknowledged(false)
    setUserType(e.target.value)
    setChecked(false)
    setRequestData({
        ...requestData,
        user_type: e.target.value
    })
  } 


  function handleChange (e, isAuto = false, name) {
    console.log(name)
    if (isAuto) {
        if (name === "med_name") {
            setRequestData({
                ...requestData,
                "med_name": e.target.innerText
            })
            if (medication.strength && !medication.strength.includes(e.target.innerText)) {
                setRequestData({
                    ...requestData,
                    "med_strength": ""
                })
            }
        } else {
            setRequestData({
                ...requestData,
                "med_strength": e.target.innerText
            })
        }
    } else {
        setRequestData({
            ...requestData,
            [e.target.name]: e.target.value
        })
    }
  }

  // can always ask chatGPT to refactor this logic but will need to take time to make
  // sure its correct
  function handleSubmit (e) {
    e.preventDefault()
    console.log(e)

    // const payload = {
    //     ...requestData, 
    //     phone_number: "+1" + requestData["phone_number"], 
    //     isAdmin: user? true : false
    // }

    // fetch("/api/requests", {
    //     credentials: "include",
    //     method: "POST",
    //     headers: { 
    //         "Content-Type": "application/json",
    //         "X-CSRFToken": Cookies.get("csrftoken")
    //     },
    //     body: JSON.stringify(payload)
    // })
    // .then(r => {
    //     if (r.ok) {
    //         r.json().then(res => {
    //             if (res.error) {
    //                 setRequestStatus([res.error])
    //             } else {
    //                 setRequestStatus(["Request successfully sent!"])
    //                 setDisabled(false)
    //             }
    //         })
    //     }
    //     else {
    //         r.json().then(res => {
    //             const errors = Object.entries(res.errors).map(e => `${e[0].replace("_", " ")}: ${e[1]}`)
    //             if (res.errors && r.status === 400) {
    //                 setRequestStatus(errors)
    //             } else {
    //                 setRequestStatus([res.errors])
    //             }
    //         })
    //     }
    // })
  }

    function handleHelp() {
        setShowHelp(!showHelp);
    }

  return (
    <Box sx={styles.FormContainer} component="form" onSubmit={handleSubmit}>
        <RequestAgreementModal 
            setIsAgreementModal={setIsAgreementModal} 
            isAgreementModal={isAgreementModal} 
            step={step} 
            setStep={setStep} 
            userType={userType}
            setUserType={setUserType}
            isPrivacyAcknowledged={isPrivacyAcknowledged}
            setisPrivacyAcknowledged={setisPrivacyAcknowledged}
            isOptInAcknowledged={isOptInAcknowledged}
            setisOptInAcknowledged={setisOptInAcknowledged}
        />
        {/* <CSRFToken /> */}
        <Box sx={{...styles.InputContainer, mb: "1rem"}}>
            <Typography color="black" sx={styles.FillableTitle}>
                FILLABLE
            </Typography>
            <Typography color="black" sx={styles.FillableSubtitle}>
                Medication Request Form
            </Typography>
            <Typography sx={styles.FillableHours}>
                Service Hours: 9:00 am (EST) to 6:00 pm (EST)
            </Typography>
            <Typography sx={styles.FillableHoursNote}>
                Any requests outside of service hours will be sent at 9:00 am (EST) the following day.
            </Typography>
            <FormControl sx={{margin: "40px auto", textAlign: "center"}}>
                <FormLabel >
                    <Typography color="black" component="h6" sx={styles.UserType}>
                        Are you a healthcare provider or patient/caregiver?<span style={{color: "red"}}> &#42;</span>
                    </Typography>
                </FormLabel>
                <RadioGroup
                    value={userType}
                    onChange={handleUserTypeRadioChange}
                    row
                >
                    <Box sx={{margin: "auto"}}>                        
                        <FormControlLabel value="health_care_provider" control={<Radio />} label="Healthcare Provider" />
                        <FormControlLabel value="patient" control={<Radio />} label="Patient/Caregiver" />
                    </Box>
                </RadioGroup>
            </FormControl>
            {showHelp && (
                <Typography sx={styles.HelpSubtitle}>
                    For an easier experience, request a printed copy of your prescription to reference.
                </Typography>
            )}
            <Link 
                sx={styles.HelpToggle}
                underline='hover'
                color='black'
                href="#" onClick={handleHelp}> 
                {showHelp ? 'Hide Help' : 'Need Help?'}
            </Link>
            <MedNameRequestInput 
                requestData={requestData} 
                label="Medication Name" 
                name="med_name" 
                handleChange={handleChange} 
                isRequired={true} 
                medications={medications} 
                setMedication={setMedication}
                setRequestData={setRequestData}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            {showHelp && (
                <Typography sx={styles.MedDetails}>
                    Type and select the Medication Name on the prescription.
                </Typography>
            )}
            <MedStrengthRequestInput 
                requestData={requestData} 
                flex={0.5} 
                label="Medication Dose/Strength"
                name="med_strength"
                handleChange={handleChange} 
                key="Strength"
                isRequired={medication.strength && medication.strength.length > 0? true : false} 
                strengths={medication.strength? medication.strength : []} 
            />
            {showHelp && (
                <Typography sx={styles.MedDetails}>
                    If applicable, select the Dose or Strength of the selected medication.
                </Typography>
            )}
            <RequestFormInput 
                requestData={requestData} 
                flex={0.3} 
                label="Quantity to Dispense" 
                name="quantity"
                handleChange={handleChange} 
                key="Quantity" 
                isRequired={true}
                placeholder="Number values only"
            />
            {showHelp && (
                <Typography sx={styles.MedDetails}>
                    Type the number of units (e.g., tablets, capsules, packs, milliliters, grams, tubes, boxes, inhalers, pens, etc.) prescribed. 
                    Number values only.
                </Typography>
            )}
            <FormControl sx={{margin: "auto", textAlign: "center", alignItems: "center"}}>
                <FormLabel sx={{my: "20px"}}>
                    <Typography color="black" component="h6" sx={styles.PaymentMethodText}>
                        Payment Method<span style={{color: "red"}}> &#42;</span>
                    </Typography>
                    {showHelp && (
                        <Typography sx={styles.PayHelp}>
                            Select how the pharmacy will bill your prescription.
                        </Typography>
                    )}
                </FormLabel>
                <RadioGroup
                    value={value}
                    onChange={handlePaymentRadioChange}
                    row
                >
                    <FormControlLabel value="insurance" control={<Radio />} label="With Insurance" />
                    <FormControlLabel value="cash" control={<Radio />} label="Without Insurance" />
                </RadioGroup>
            </FormControl>
        </Box>
        {value === "insurance"? (
            <Box sx={{...styles.InputContainer, gap: "2rem"}}>
                <Typography sx={styles.PharmacyInsuranceText}>Pharmacy Insurance Card:</Typography>
                {showHelp && (
                    <Typography sx={styles.InsuranceHelp}>
                        Copy the following information from your PHARMACY Insurance Card.
                    </Typography>
                )}
                {showHelp && (
                    <Typography sx={styles.InsuranceHelp}>
                        If your card does not have a RxGroup or Group, type "N/A".
                    </Typography>
                )}
                <Box sx={styles.InsuranceFields}>
                    {
                        [
                            {flex: 0.33, label: "BIN", name: "bin"}, 
                            {flex: 0.33, label: "PCN", name: "pcn"}, 
                            {flex: 0.33, label: "RxGroup", name: "rxgroup"}
                        ]
                        .map(i => 
                            <RequestFormInput 
                                requestData={requestData} 
                                flex={i.flex} 
                                label={i.label} 
                                name={i.name} 
                                handleChange={handleChange} 
                                key={i.label} 
                                isRequired={true}
                            />)
                    }
                </Box>
            </Box>
        ) : null}
        <Box sx={{...styles.InputContainer, mt: "1rem"}}>
            <RequestFormInput 
                requestData={requestData} 
                flex={0.8} 
                label="Mobile Number"
                name="phone_number" 
                handleChange={handleChange} 
                isRequired={true}
                placeholder="Please enter 10 digits"
            />
            {showHelp && (
                <Typography sx={styles.MobileNumber}>
                    Provide your Mobile Number to receive SMS text notifications if a pharmacy has this medication in stock today.
                </Typography>
            )}
        </Box>
        <Box sx={{textAlign: "center", width: "90%", marginTop: "2rem", marginBottom: "-2rem", marginX: "auto", display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <FormControlLabel
                disabled={!(userType === "patient" || userType === "health_care_provider")}
                labelPlacement='end'
                control={<Checkbox checked={checked} onChange={handleAgreementCheck}/>} 
                label={<Typography variant='h5' sx={{fontSize: "1.3rem", fontWeight: "bolder"}}>I AGREE TO KOW'S TERMS OF USE AND PRIVACY POLICY</Typography>} 
            />
        </Box>
        <Box sx={{textAlign: "center", width: "90%", margin: "0 auto"}}>
            {status.map((e, index) => 
                <Typography key={index} sx={{color: status[0] === "Request successfully sent!"? "green" : "red"}}>{e}</Typography>)}
        </Box>
        <Box sx={styles.ButtonsContainer}>
            <Button variant='contained' sx={{color: "white"}} size="large" type="submit" disabled={user? false : (!isDisabled || !checked)}>
                Send Request
            </Button>
            <Button variant='text' sx={{color: "#154161"}} size="medium" onClick={handleClear} >
                Reset Request
            </Button>
        </Box>
    </Box>   

  )
}
