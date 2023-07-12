import { useState } from 'react'

import OutsideClickHandler from 'react-outside-click-handler'
import { Box, TextField, Typography, List, ListItem } from '@mui/material'
import { styles } from './MedNameRequestInput-styles'

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
    <Box sx={styles.MainContainter}>
      <OutsideClickHandler onOutsideClick={() => setDropDown(false)}>
        <Box sx={{width: "100%"}}>
            <Typography color="black" component="h6" sx={styles.Text}>
              {label}{isRequired? <span style={{color: "red"}}> &#42;</span> : null}
            </Typography>
            <TextField sx={{width: "100%"}} onChange={handleSearch} value={searchValue} name={name} onFocus={handleFocus} placeholder="Select a medication from the dropdown"/>
        </Box>
        <Box sx={{...styles.SearchList, display: dropdown? "block" : "none"}}>
            <List >
                {filteredMedications.length > 0? filteredMedications.map((i) => 
                  <ListItem 
                    onClick={(e) => handleSelection(e, i)} 
                    sx={{cursor: "pointer", '&:hover': {backgroundColor: "rgba(5, 5, 51, 0.5)"}}} 
                    key={i.id}
                  >
                    {i.name}
                  </ListItem>) : 
                  <ListItem>No results found</ListItem>
                }
            </List>
        </Box>
      </OutsideClickHandler>
    </Box>
  )
}
