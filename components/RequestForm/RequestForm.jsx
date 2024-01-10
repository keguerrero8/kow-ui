import { useState } from 'react'
import Link from 'next/link';

import MedNameRequestInput from '@/components/MedNameRequestInput/MedNameRequestInput'
import MedStrengthRequestInput from '@/components/MedStrengthRequestInput/MedStrengthRequestInput'

import styles from './RequestForm.module.css'
import messagingService from '@/lib/messagingService'
import { useUser } from '@/context/user'

import CheckboxModal from '@/components/CheckboxModal/CheckboxModal';
import TermsText from '@/components/Documents/TermsOfUse/TermsText';
import PrivacyText from '@/components/Documents/PrivacyPolicy/PrivacyText';
import ProviderOptInText from '@/components/Documents/ProviderOptIn/ProviderOptInText';
// Icons
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
  const [medication, setMedication] = useState({})
  const [insuranceValue, setInsuranceValue] = useState("insurance")
  const [status, setRequestStatus] = useState([])
  const [isRequestSuccessful, setisRequestSuccessful] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [requestData, setRequestData] = useState(defaultRequestData)
  const [userType, setUserType] = useState("")
  const [isPrivacyAcknowledged, setisPrivacyAcknowledged] = useState(false)
  const [isOptInAcknowledged, setisOptInAcknowledged] = useState(false)
  const [providerToggled, setProviderToggled] = useState(false)
  const [patientToggled, setPatientToggled] = useState(false)
//   const [singleMedToggled, setSingleMedToggled] = useState(true)
//   const [compoundToggled, setCompoundToggled] = useState(false)


  const handleProviderClick = () => {
    setisPrivacyAcknowledged(false)
    setisOptInAcknowledged(false)
    setRequestData({
        ...requestData,
        user_type: "health_care_provider"
    })
    setProviderToggled(true);
    setPatientToggled(false);
    setUserType("health_care_provider");
  }
  const handlePatientClick = () => {
    setisPrivacyAcknowledged(false)
    setisOptInAcknowledged(false)
    setRequestData({
        ...requestData,
        user_type: "patient"
    })
    setPatientToggled(true);
    setProviderToggled(false);
    setUserType("patient");
  }
//   const handleSingleMedClick = () => {
//     setSingleMedToggled(true);
//     setCompoundToggled(false);
//   }
//   const handleCompoundClick = () => {
//     setCompoundToggled(true);
//     setSingleMedToggled(false);
//   }
  const handleNoInsuranceClick = () => {
    setInsuranceValue('cash');
    setRequestData({
        ...requestData,
        isInsurance: false
    })
  }
  const handleYesInsuranceClick = () => {
    setInsuranceValue('insurance');
    setRequestData({
        ...requestData,
        isInsurance: true
    })
  }

  function handleClear () {
    setRequestData(defaultRequestData)
    setInsuranceValue("insurance")
    setisRequestSuccessful(false)
    setRequestStatus([])
    setMedication({})
    setSearchValue("")
    setisPrivacyAcknowledged(false)
    setisOptInAcknowledged(false)
    setUserType("")
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
        setRequestStatus(["Request submitted!"])
        setisRequestSuccessful(true)
    } else {
        const errors = Object.entries(response.error).map(e => `${e[0].replace("_", " ")}: ${e[1]}`)
        setRequestStatus(errors)
    }

  }

  const isSubmitButtonDisabled = isAuthenticated? false : (isRequestSuccessful || (!isPrivacyAcknowledged || !isOptInAcknowledged))

  return (
    <div className={styles.background}>
        <form className={styles.container} onSubmit={handleSubmit}>
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
                            type='button'
                            value={userType} 
                            className={styles.iconToggle} 
                            onClick={handleProviderClick}
                        >
                            {providerToggled ? <RadioButtonCheckedIcon className={styles.radioIcon} /> : <RadioButtonUncheckedOutlinedIcon className={styles.radioIcon}/>}
                        </button>
                        <h3>Healthcare Provider</h3>
                    </div>
                    <div className={styles.radioOption}>
                        <button 
                            type='button'
                            value={userType}
                            className={styles.iconToggle} 
                            onClick={handlePatientClick}
                        >
                            {patientToggled ? <RadioButtonCheckedIcon className={styles.radioIcon} /> : <RadioButtonUncheckedOutlinedIcon className={styles.radioIcon}/>}
                        </button>
                        <h3>Patient/Caregiver</h3>
                    </div>
                </div>
            </div>
            <div className={styles.sectionForm}>
                <div className={styles.sectionHeader}>
                    <MedicationOutlinedIcon className={styles.icon}/>
                    <h3>Requested Medication:</h3>
                </div>
                {/*<div className={styles.radioButtonsContainer}>
                    <div className={styles.radioOption}>
                        <button className={styles.iconToggle} onClick={handleSingleMedClick}>
                            {singleMedToggled ? <RadioButtonCheckedIcon className={styles.radioIcon} /> : <RadioButtonUncheckedOutlinedIcon className={styles.radioIcon}/>}
                        </button>                    
                        <h3>Single Medication</h3>
                    </div>
                    <div className={styles.radioOption}>
                        <button className={styles.iconToggle} onClick={handleCompoundClick}>
                            {compoundToggled ? <RadioButtonCheckedIcon className={styles.radioIcon} /> : <RadioButtonUncheckedOutlinedIcon className={styles.radioIcon}/>}
                        </button>
                        <h3>Compounded Product</h3>
                    </div>
                </div> */}
                {/* <div className={styles.sectionForm}>
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
                </div> */}
                <div className={styles.formContainer}>
                    <div className={styles.importComponent}>
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
                    </div>
                    <div className={styles.importComponent}>
                        <MedStrengthRequestInput 
                            requestData={requestData} 
                            label="Medication Dose/Strength"
                            name="med_strength"
                            handleChange={handleChange} 
                            key="Strength"
                            isRequired={medication.strength && medication.strength.length > 0? true : false} 
                            strengths={medication.strength? medication.strength : []} 
                        />
                    </div>
                    <h3>Prescribed Quantity<span style={{color: "red"}}> &#42;</span></h3>
                        <input
                            // type='text'
                            name='quantity'
                            className={styles.inputField}
                            required
                            onChange={handleChange}
                            value={requestData["quantity"]}
                            placeholder='Number values only'
                        />
                    <p>Type the number of units (e.g., tablets, capsules, packs, tubes, boxes, inhalers, pens, grams, milliliters, etc.) prescribed.</p>
                </div>
            </div>
            <div className={styles.sectionRadio}>
                <div className={styles.sectionHeader}>
                    <AddCardOutlinedIcon className={styles.icon}/>
                    <h3>Payment Method:</h3>
                </div>
                <p>Select how the pharmacy will bill your prescription.</p>
                <div className={styles.radioButtonsContainer}>
                        <div className={styles.radioOption}>
                            <button
                                className={styles.iconToggle} 
                                onClick={handleNoInsuranceClick}
                                type='button'
                            >
                                {insuranceValue !== "insurance" ? <RadioButtonCheckedIcon className={styles.radioIcon} /> : <RadioButtonUncheckedOutlinedIcon className={styles.radioIcon}/>}
                            </button>                    
                            <h3>Without Insurance</h3>
                        </div>
                        <div className={styles.radioOption}>
                            <button
                                className={styles.iconToggle} 
                                onClick={handleYesInsuranceClick}
                                type='button'
                            >
                                {insuranceValue === "insurance" ? <RadioButtonCheckedIcon className={styles.radioIcon} /> : <RadioButtonUncheckedOutlinedIcon className={styles.radioIcon}/>}
                            </button>                    
                            <h3>With Insurance</h3>
                        </div>
                </div>  
            </div>
            {insuranceValue === "insurance" ? (
                <div className={styles.sectionForm}>
                    <div className={styles.sectionHeader}>
                        <MedicalInformationOutlinedIcon className={styles.icon}/>
                        <h3>Pharmacy Insurance Card:</h3>
                    </div>
                    <div className={styles.formContainer}>
                        <h3>BIN<span style={{color: "red"}}> &#42;</span></h3>
                            <input
                            type='text'
                            name='bin'
                            className={styles.inputField}
                            required
                            onChange={handleChange}
                            value={requestData["bin"]}
                            />
                        <h3>PCN<span style={{color: "red"}}> &#42;</span></h3>
                            <input
                            type='text'
                            name='pcn'
                            className={styles.inputField}
                            required
                            onChange={handleChange}
                            value={requestData["pcn"]}
                            />
                        <h3>RxGroup<span style={{color: "red"}}> &#42;</span></h3>
                            <input
                            type='text'
                            name='rxgroup'
                            className={styles.inputField}
                            required
                            onChange={handleChange}
                            value={requestData["rxgroup"]}
                            />
                        <p>If your card does not have a RxGroup or GRP, type &quot;N/A&quot;.</p>              
                    </div>
                </div>
            ) : null}
            <div className={styles.sectionForm}>
                <div className={styles.sectionHeader}>
                    <PhoneOutlinedIcon className={styles.icon}/>
                    <h3>Contact Information:</h3>
                </div>
                <div className={styles.formContainer}>
                    <h3>Mobile Number<span style={{color: "red"}}> &#42;</span></h3>
                        <input
                        type='text'
                        name='phone_number'
                        className={styles.inputField}
                        required
                        onChange={handleChange}
                        placeholder='Please enter 10 digits'
                        value={requestData["phone_number"]}
                        />
                    <p>Provide your Mobile Number to receive SMS text notifications if the requested medication is available.</p>
                </div>
            </div>
            <div className={styles.agreements}>
                <div className={styles.checkbox}>
                    <CheckboxModal
                        checkboxText="I agree to KOW's "
                        linkText='Privacy Policy'
                        modalContent1={<PrivacyText/>}
                        setisAcknowledged={setisPrivacyAcknowledged}
                        isAcknowledged={isPrivacyAcknowledged}
                    />
                </div>
                {providerToggled ? (
                    <div className={styles.checkbox}>
                        <CheckboxModal
                            checkboxText="I agree to KOW's "
                            linkText='Terms and Conditions'
                            modalContent1={<TermsText/>}
                            modalContent2={<ProviderOptInText/>}
                            setisAcknowledged={setisOptInAcknowledged}
                            isAcknowledged={isOptInAcknowledged}
                        />
                    </div> 
                ) : (
                    <div className={styles.checkbox}>
                        <CheckboxModal
                            checkboxText="I agree to KOW's "
                            linkText='Terms and Conditions'
                            modalContent1={<TermsText/>}
                            setisAcknowledged={setisOptInAcknowledged}
                            isAcknowledged={isOptInAcknowledged}
                        />
                    </div>
                )}
            </div>
            <div className={styles.statusContainer}>
                {status.map((e, index) => 
                    <p key={index} className={status[0] === "Request submitted!"? `${styles.statusSuccess}` : `${styles.statusFail}`}>{e}</p>)}
            </div>
            <div className={styles.buttonContainer}>
                <button type='submit' disabled={isSubmitButtonDisabled} className={isSubmitButtonDisabled? `${styles.submitButtonDisabled}` : `${styles.submitButtonEnabled}`}>
                    Submit Request
                </button>
                <button type='button' className={styles.resetButton} onClick={handleClear}>
                    Reset Request
                </button>
            </div>
        </form>
    </div>
  )
}
