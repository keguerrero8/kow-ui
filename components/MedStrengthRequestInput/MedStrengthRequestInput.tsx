import { useState } from 'react'

import styles from "./MedStrengthRequestInput.module.css"

import OutsideClickHandler from 'react-outside-click-handler'

interface MedStrengthRequestInputProps {
  label: string
  name: string
  handleChange: (e: React.SyntheticEvent, isAuto: boolean, name: string) => void
  requestData: Request
  isRequired?: boolean
  strengths: string[]
}

const MedStrengthRequestInput: React.FC<MedStrengthRequestInputProps> = ({ label, name, handleChange, requestData, isRequired = false, strengths }) => {
  const [dropdown, setDropDown] = useState<boolean>(false)

  function handleSelection (e: React.MouseEvent<HTMLParagraphElement>) {
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
                    onClick={(e) => handleSelection(e)} 
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

export default MedStrengthRequestInput
