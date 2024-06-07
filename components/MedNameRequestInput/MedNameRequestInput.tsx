import { useState, Dispatch, SetStateAction } from 'react'

import OutsideClickHandler from 'react-outside-click-handler'
import styles from './MedNameRequestInput.module.css'

interface MedNameRequestInputProps {
  label: string
  name: string
  handleChange: (e: React.SyntheticEvent, name: string) => void
  isRequired?: boolean
  medications: Medication[]
  setMedication: Dispatch<SetStateAction<Medication | {}>>
  requestData: RequestData
  setRequestData: Dispatch<SetStateAction<RequestData>>
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
}

const MedNameRequestInput: React.FC<MedNameRequestInputProps> = ({ label, name, handleChange, isRequired = false, medications, setMedication, requestData, setRequestData, searchValue, setSearchValue }) => {
  const [dropdown, setDropDown] = useState<boolean>(false)

  const handleFocus = () => setDropDown(true)

  const handleSelection = (e: React.MouseEvent<HTMLParagraphElement>, medication: Medication) => {
    setDropDown(false)
    handleChange(e, "med_name")
    setMedication(medication)
    setSearchValue((e.target as HTMLParagraphElement).innerText)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMedication({})
    setSearchValue(e.target.value)
    setRequestData({
      ...requestData,
      "med_name": "",
      "med_strength": ""
    })
  }
  
  const filteredMedications = medications.filter(m => m.name.toLocaleLowerCase().startsWith(searchValue.toLocaleLowerCase()))

  return (
    <div className={styles.mainContainer}>
      <OutsideClickHandler onOutsideClick={() => setDropDown(false)}>
        <div style={{ width: "100%"}}>
            <p className={styles.text}>
              {label}{isRequired? <span style={{color: "red"}}> &#42;</span> : null}
            </p>
            <input className={styles.inputField} onChange={handleSearch} value={searchValue} name={name} onFocus={handleFocus} placeholder="Type or select a medication"/>
        </div>
        <div className={dropdown? `${styles.searchListDropDown}` : `${styles.searchListNoDropDown}`}>
            <div >
                {filteredMedications.length > 0? filteredMedications.map((medication) => 
                  <p 
                    onClick={(e) => handleSelection(e, medication)} 
                    className={styles.searchListItems} 
                    key={medication.id}
                  >
                    {medication.name}
                  </p>) : 
                  <p className={styles.searchListItems}>No results found</p>
                }
            </div>
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default MedNameRequestInput
