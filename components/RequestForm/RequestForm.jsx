import { useState } from 'react'
import Link from 'next/link';

import RequestFormInput from '@/components/RequestFormInput/RequestFormInput.jsx'
import MedNameRequestInput from '@/components/MedNameRequestInput/MedNameRequestInput.jsx'
import MedStrengthRequestInput from '@/components/MedStrengthRequestInput/MedStrengthRequestInput.jsx'
import RequestAgreementModal from '@/components/RequestAgreementModal/RequestAgreementModal'
<<<<<<< HEAD
import PrivacyCheckbox from './PrivacyCheckbox'
import ProviderTermsCheckbox from './ProviderTermsCheckbox'
import TermsOnlyCheckbox from './TermsOnlyCheckbox.jsx'

import styles from './RequestForm.module.css'

// import { styles } from './RequestForm-styles'
=======
import { styles } from './RequestForm-styles'
>>>>>>> efa9a31c30b58717ba1fdcdb270297933b626e6e
import messagingService from '@/lib/messagingService'
import { useUser } from '@/context/user'

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
} from '@mui/material'
import ScheduleIcon from '@mui/icons-material/Schedule';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

export default function RequestForm({ medications }) {
  const { isAuthenticated } = useUser()
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
  
  const [providerToggled, setProviderToggled] = useState(false)
  const [patientToggled, setPatientToggled] = useState(false)
  const [singleMedToggled, setSingleMedToggled] = useState(true)
  const [compoundToggled, setCompoundToggled] = useState(false)
  const [noInsuranceToggled, setNoInsuranceToggled] = useState(false)
  const [yesInsuranceToggled, setYesInsuranceToggled] = useState(false)

  const handleProviderClick = () => {
    setProviderToggled(true);
    setPatientToggled(false);
    setUserType('Healthcare Provider');
  }
  const handlePatientClick = () => {
    setPatientToggled(true);
    setProviderToggled(false);
    setUserType('Patient/Caregiver');
  }
  const handleSingleMedClick = () => {
    setSingleMedToggled(true);
    setCompoundToggled(false);
  }
  const handleCompoundClick = () => {
    setCompoundToggled(true);
    setSingleMedToggled(false);
  }
  const handleNoInsuranceClick = () => {
    setNoInsuranceToggled(true);
    setYesInsuranceToggled(false);
    setValue('cash');
  }
  const handleYesInsuranceClick = () => {
    setYesInsuranceToggled(true);
    setNoInsuranceToggled(false);
    setValue('insurance');
  }

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

  async function handleSubmit (e) {
    e.preventDefault()
    const payload = {
        ...requestData, 
        phone_number: "+1" + requestData["phone_number"], 
        isAdmin: isAuthenticated
    }
    
    const response = await messagingService.createRequest(payload)
    if (!response.error) {
        setRequestStatus(["Request successfully sent!"])
        setDisabled(false)
    } else {
        const errors = Object.entries(response.error).map(e => `${e[0].replace("_", " ")}: ${e[1]}`)
        setRequestStatus(errors)
    }

  }

    function handleHelp() {
        setShowHelp(!showHelp);
    }


  return (
    <div className={styles.background}>
        <div className={styles.container} onSubmit={handleSubmit}>
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
            <div className={styles.formInfo}>
                <h2>Submit Medication Request Form</h2>
                <div className={styles.iconInfo}>
                    <ArticleOutlinedIcon className={styles.icon}/>
                    <h3>For an easier experience, request a printed copy of your prescription to reference.</h3>
                </div>
                <div className={styles.iconInfo}>
                    <ScheduleIcon className={styles.icon}/>
                    <h3>Service Hours: 9:00 am (EST) to 6:00 pm (EST)</h3>
                </div>
                <p>Any requests submitted after 6:00 pm (EST) will be sent at 9:00 am (EST) the next day.</p>
            </div>
            <div className={styles.sectionRadio}>
                <div className={styles.sectionHeader}>
                    <PersonOutlineOutlinedIcon className={styles.icon}/>
                    <h3>
                        Are you a Healthcare Provider or a Patient/Caregiver?<span style={{color: "red"}}> &#42;</span>
                    </h3>
                </div>
                <div className={styles.radioButtonsContainer}>
                    <div className={styles.radioOption}>
                        <button 
                            value={userType} 
                            className={styles.iconToggle} 
                            onClick={handleProviderClick}
                        >
                            {providerToggled ? <RadioButtonCheckedIcon className={styles.radioIcon} /> : <RadioButtonUncheckedOutlinedIcon className={styles.radioIcon}/>}
                        </button>
                        <h3 onClick={handleProviderClick}>Healthcare Provider</h3>
                    </div>
                    <div className={styles.radioOption}>
                        <button 
                            value={userType}
                            className={styles.iconToggle} 
                            onClick={handlePatientClick}
                        >
                            {patientToggled ? <RadioButtonCheckedIcon className={styles.radioIcon} /> : <RadioButtonUncheckedOutlinedIcon className={styles.radioIcon}/>}
                        </button>
                        <h3 onClick={handlePatientClick}>Patient/Caregiver</h3>
                    </div>
                </div>
            </div>
            <form className={styles.sectionForm}>
                <div className={styles.sectionHeader}>
                    <MedicationOutlinedIcon className={styles.icon}/>
                    <h3>Requested Medication:</h3>
                </div>
                <div className={styles.radioButtonsContainer}>
                    <div className={styles.radioOption}>
                        <button className={styles.iconToggle} onClick={handleSingleMedClick}>
                            {singleMedToggled ? <RadioButtonCheckedIcon className={styles.radioIcon} /> : <RadioButtonUncheckedOutlinedIcon className={styles.radioIcon}/>}
                        </button>                    
                        <h3 onClick={handleSingleMedClick}>Single Medication</h3>
                    </div>
                    <div className={styles.radioOption}>
                        <button className={styles.iconToggle} onClick={handleCompoundClick}>
                            {compoundToggled ? <RadioButtonCheckedIcon className={styles.radioIcon} /> : <RadioButtonUncheckedOutlinedIcon className={styles.radioIcon}/>}
                        </button>
                        <h3 onClick={handleCompoundClick}>Compounded Product</h3>
                    </div>
                </div>
                {singleMedToggled ? (
                    <div className={styles.sectionForm}>
                        {/* <MedNameRequestInput 
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
                        /> */}
                        <h3>Medication Name<span style={{color: "red"}}> &#42;</span></h3>
                            <input
                                name='med_name'
                                className={styles.inputField}
                                required
                                onChange={handleChange}
                            />  
                        {/* <MedStrengthRequestInput 
                            requestData={requestData} 
                            flex={0.5} 
                            label="Medication Dose/Strength"
                            name="med_strength"
                            handleChange={handleChange} 
                            key="Strength"
                            isRequired={medication.strength && medication.strength.length > 0? true : false} 
                            strengths={medication.strength? medication.strength : []} 
                        /> */}
                        <h3>Medication Strength<span style={{color: "red"}}> &#42;</span></h3>
                            <input
                                name='med_strength'
                                className={styles.inputField}
                                required
                                onChange={handleChange}
                            />                
                        {/* <RequestFormInput 
                            requestData={requestData} 
                            flex={0.3} 
                            label="Quantity to Dispense" 
                            name="quantity"
                            handleChange={handleChange} 
                            key="Quantity" 
                            isRequired={true}
                            placeholder="Number values only"
                        /> */}
                        <h3>Prescribed Quantity<span style={{color: "red"}}> &#42;</span></h3>
                            <input
                                type='number'
                                name='quantity'
                                className={styles.inputField}
                                required
                                onChange={handleChange}
                            />
                        <p>Type the number of units (e.g., tablets, capsules, packs, tubes, boxes, inhalers, pens, grams, milliliters, etc.) prescribed.</p>
                    </div>
                ) : compoundToggled ? (
                    <div className={styles.sectionForm}>
                        <h3>Product Description<span style={{color: "red"}}> &#42;</span></h3>
                            <textarea
                                type='text'
                                name='cmpnd_description'
                                placeholder='(e.g., Lidocaine and Triamcinolone 1:1 cream 30 grams; Maalox and Lidocaine 2:1 mouthwash 240mL)'
                                className={styles.inputDescription}
                                required
                                onChange={handleChange}
                            />  
                        <h3>Medication Reference(s)</h3>
                            <input
                                name='cmpnd_reference'
                                className={styles.inputField}
                                onChange={handleChange}
                            />  
                        <p className={styles.optional}>Optional</p>
                    </div>
                ) : null}
            </form>
            <div className={styles.sectionRadio}>
                <div className={styles.sectionHeader}>
                    <AddCardOutlinedIcon className={styles.icon}/>
                    <h3>Payment Method:</h3>
                </div>
                <p>Select how the pharmacy will bill your prescription.</p>
                {compoundToggled ? (
                    <h3>** Most insurances do not cover compounded products. Please follow up with the dispensing pharmacy for the out-of-pocket cost.</h3>
                ) : (
                    // {
                    //     [
                    //         {flex: 0.33, label: "BIN", name: "bin"}, 
                    //         {flex: 0.33, label: "PCN", name: "pcn"}, 
                    //         {flex: 0.33, label: "RxGroup", name: "rxgroup"}
                    //     ]
                    //     .map(i => 
                    //         <RequestFormInput 
                    //             requestData={requestData} 
                    //             flex={i.flex} 
                    //             label={i.label} 
                    //             name={i.name} 
                    //             handleChange={handleChange} 
                    //             key={i.label} 
                    //             isRequired={true}
                    //         />)
                    // }
                    <div className={styles.radioButtonsContainer}>
                        <div className={styles.radioOption}>
                            <button 
                                value={value} 
                                className={styles.iconToggle} 
                                onClick={handleNoInsuranceClick}
                            >
                                {noInsuranceToggled ? <RadioButtonCheckedIcon className={styles.radioIcon} /> : <RadioButtonUncheckedOutlinedIcon className={styles.radioIcon}/>}
                            </button>                    
                            <h3 onClick={handleNoInsuranceClick}>Without Insurance</h3>
                        </div>
                        <div className={styles.radioOption}>
                            <button 
                                value={value} 
                                className={styles.iconToggle} 
                                onClick={handleYesInsuranceClick}
                            >
                                {yesInsuranceToggled ? <RadioButtonCheckedIcon className={styles.radioIcon} /> : <RadioButtonUncheckedOutlinedIcon className={styles.radioIcon}/>}
                            </button>                    
                            <h3 onClick={handleYesInsuranceClick}>With Insurance</h3>
                        </div>
                    </div>                
                )}
            </div>
            {yesInsuranceToggled ? (
                <form className={styles.sectionForm}>
                    <div className={styles.sectionHeader}>
                        <MedicalInformationOutlinedIcon className={styles.icon}/>
                        <h3>Pharmacy Insurance Card:</h3>
                    </div>
                    <h3>BIN<span style={{color: "red"}}> &#42;</span></h3>
                        <input
                        type='number'
                        name='ins_bin'
                        className={styles.inputField}
                        required
                        onChange={handleChange}
                        />
                    <h3>PCN<span style={{color: "red"}}> &#42;</span></h3>
                        <input
                        type='number'
                        name='ins_pcn'
                        className={styles.inputField}
                        required
                        onChange={handleChange}
                        />
                    <h3>RxGroup<span style={{color: "red"}}> &#42;</span></h3>
                        <input
                        type='text'
                        name='ins_group'
                        className={styles.inputField}
                        required
                        onChange={handleChange}
                        />
                    <p>If your card does not have a RxGroup or GRP, type &quot;N/A&quot;.</p>
                </form>
            ) : null}
            <form className={styles.sectionForm}>
                {/* <RequestFormInput 
                    requestData={requestData} 
                    flex={0.8} 
                    label="Mobile Number"
                    name="phone_number" 
                    handleChange={handleChange} 
                    isRequired={true}
                    placeholder="Please enter 10 digits"
                /> */}
                <div className={styles.sectionHeader}>
                    <PhoneOutlinedIcon className={styles.icon}/>
                    <h3>Contact Information:</h3>
                </div>
                <h3>Mobile Number<span style={{color: "red"}}> &#42;</span></h3>
                    <input
                    type='number'
                    name='phone_number'
                    className={styles.inputField}
                    required
                    onChange={handleChange}
                    />
                <p>Provide your Mobile Number to receive SMS text notifications if a pharmacy has the requested medication available.</p>
            </form>
            <div className={styles.agreements}>
                <div className={styles.checkbox}>
                    <PrivacyCheckbox/>
                </div>
                {providerToggled ? (
                    <div className={styles.checkbox}>
                        <ProviderTermsCheckbox/>
                    </div> 
                ) : (
                    <div className={styles.checkbox}>
                        <TermsOnlyCheckbox/>
                    </div>
                )}
            </div>
            <div className={styles.buttonContainer}>
                <button type='submit' className={styles.submitButton}>
                    Submit Request
                </button>
                <button className={styles.resetButton} onClick={handleClear}>
                    Reset Request
                </button>
            </div>
            {/* <Box sx={{...styles.InputContainer, mb: "1rem"}}>
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
                            If your card does not have a RxGroup or Group, type &quot;N/A&quot;.
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
                    label={<Typography variant='h5' sx={{fontSize: "1.3rem", fontWeight: "bolder"}}>I AGREE TO KOW&apos;S TERMS OF USE AND PRIVACY POLICY</Typography>} 
                />
            </Box>
            <Box sx={{textAlign: "center", width: "90%", margin: "0 auto"}}>
                {status.map((e, index) => 
                    <Typography key={index} sx={{color: status[0] === "Request successfully sent!"? "green" : "red"}}>{e}</Typography>)}
            </Box>
            <Box sx={styles.ButtonsContainer}>
                <Button variant='contained' sx={{color: "white"}} size="large" type="submit" disabled={isAuthenticated? false : (!isDisabled || !checked)}>
                    Send Request
                </Button>
                <Button variant='text' sx={{color: "#154161"}} size="medium" onClick={handleClear} >
                    Reset Request
                </Button>
            </Box> */}
        </div>   
    </div>
  )
}
