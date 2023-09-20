import { useState } from 'react'

import styles from "./MedStrengthRequestInput.module.css"

import OutsideClickHandler from 'react-outside-click-handler'

export default function MedStrengthRequestInput({ label, name, handleChange, requestData, isRequired = false, strengths }) {
  const [dropdown, setDropDown] = useState(false)

  function handleSelection (e, i) {
    setDropDown(false)
    handleChange(e, true, "med_strength")
  }
  
  const handleFocus = () => setDropDown(true)

  return (
    <div className={styles.mainContainer}>
      <OutsideClickHandler onOutsideClick={() => setDropDown(false)}>
        <div style={{ width: "100%"}}>
            <p className={styles.text}>
              {label}{isRequired? <span style={{color: "red"}}> &#42;</span> : null}
            </p>
            <input
              value={requestData[name]} 
              name={name} 
              onFocus={handleFocus} 
              disabled={!isRequired}
              placeholder={isRequired? "Select a strength from the dropdown" : ""}
              className={isRequired? `${styles.inputField}` : `${styles.inputFieldDisabled}`}
            />
        </div>
        <div className={dropdown? `${styles.searchListDropDown}` : `${styles.searchListNoDropDown}`}>
            <div >
                {strengths.length > 0? strengths.map((i) => 
                  <p 
                    onClick={(e) => handleSelection(e, i)} 
                    className={styles.searchListItems} 
                    key={i}
                  >
                      {i}
                  </p>) :
                  <p className={styles.searchListItems}>No results found</p>
                }
            </div>
        </div>
      </OutsideClickHandler>
    </div>
  )
}
