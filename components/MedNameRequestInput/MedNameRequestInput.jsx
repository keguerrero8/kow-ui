import { useState } from 'react'

import OutsideClickHandler from 'react-outside-click-handler'
import styles from './MedNameRequestInput.module.css'

export default function MedNameRequestInput({ label, name, handleChange, isRequired = false, medications, setMedication, requestData, setRequestData, searchValue, setSearchValue }) {
  const [dropdown, setDropDown] = useState(false)

  const handleFocus = () => setDropDown(true)

  const handleSelection = (e, i) => {
    setDropDown(false)
    handleChange(e, true, "med_name")
    setMedication(i)
    setSearchValue(e.target.innerText)
  }

  const handleSearch = (e) => {
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
            <input className={styles.inputField} onChange={handleSearch} value={searchValue} name={name} onFocus={handleFocus} placeholder="Select a medication from the dropdown"/>
        </div>
        <div className={dropdown? `${styles.searchListDropDown}` : `${styles.searchListNoDropDown}`}>
            <div >
                {filteredMedications.length > 0? filteredMedications.map((i) => 
                  <p 
                    onClick={(e) => handleSelection(e, i)} 
                    className={styles.searchListItems} 
                    key={i.id}
                  >
                    {i.name}
                  </p>) : 
                  <p className={styles.searchListItems}>No results found</p>
                }
            </div>
        </div>
      </OutsideClickHandler>
    </div>
  )
}
