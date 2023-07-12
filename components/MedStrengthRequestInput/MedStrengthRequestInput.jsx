import React, { useState } from 'react'

import { styles } from './MedStrengthRequestInput-styles'

import OutsideClickHandler from 'react-outside-click-handler'
import { Box, TextField, Typography, List, ListItem } from '@mui/material'

export default function MedStrengthRequestInput({ flex, label, name, handleChange, requestData, isRequired = false, strengths }) {
  const [dropdown, setDropDown] = useState(false)

  function handleSelection (e, i) {
    setDropDown(false)
    handleChange(e, true, "med_strength")
  }

  const handleFocus = () => setDropDown(true)

  return (
    <Box sx={{display: "flex", flexDirection: "column", flex: flex}}>
      <OutsideClickHandler onOutsideClick={() => setDropDown(false)}>
        <Box sx={{width: "100%"}}>
            <Typography color="black" component="h6" sx={styles.Text}>
              {label}{isRequired? <span style={{color: "red"}}> &#42;</span> : null}
              </Typography>
            <TextField 
              sx={{width: "100%", bgcolor: isRequired? "white" : "rgba(5, 5, 51, 0.1)"}} 
              value={requestData[name]} 
              name={name} 
              onFocus={handleFocus} 
              disabled={!isRequired}
              placeholder={isRequired? "Select a strength from the dropdown" : ""}
            />
        </Box>
        <Box sx={{...styles.StrengthList, display: dropdown ? "block" : "none"}}>
            <List >
                {strengths.length > 0? strengths.map((i) => 
                  <ListItem 
                    onClick={(e) => handleSelection(e, i)} 
                    sx={{cursor: "pointer", '&:hover': {backgroundColor: "rgba(5, 5, 51, 0.5)"}}} 
                    key={i}
                  >
                      {i}
                  </ListItem>) :
                <ListItem>No results found</ListItem> }
            </List>
        </Box>
      </OutsideClickHandler>
    </Box>
  )
}
