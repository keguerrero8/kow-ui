import { Dispatch, SetStateAction, useState } from 'react'

import OutsideClickHandler from 'react-outside-click-handler'
import { Box, TextField, Typography, List, ListItem } from '@mui/material'
import { styles } from './FormGenericDropDown-styles'

interface FormGenericDropDownProps {
  label: string
  name: string
  handleChange: (e: React.SyntheticEvent, dropDownKey: string) => void
  isRequired: boolean
  options: string[]
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  placeholder: string
}

const FormGenericDropDown: React.FC<FormGenericDropDownProps> = ({ label, name, handleChange, isRequired = false, options, searchValue, setSearchValue, placeholder }) => {
  const [dropdown, setDropDown] = useState<boolean>(false)

  const handleFocus = () => setDropDown(true)

  const handleSelection = (e: React.MouseEvent<HTMLElement>) => {
    setDropDown(false)
    handleChange(e, name)
    setSearchValue((e.target as HTMLElement).innerText)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearchValue(e.target.value)
  }
  
  const filteredOptions = options.filter(o => o.toLocaleLowerCase().startsWith(searchValue.toLocaleLowerCase()))

  return (
    <Box sx={styles.MainContainter}>
      <OutsideClickHandler onOutsideClick={() => setDropDown(false)}>
        <Box sx={{width: "100%"}}>
            <Typography color="black" component="h6" sx={styles.Text}>
              {label}{isRequired? <span style={{color: "red"}}> &#42;</span> : null}
            </Typography>
            <TextField sx={{width: "100%"}} onChange={handleSearch} value={searchValue} name={name} onFocus={handleFocus} placeholder={placeholder}/>
        </Box>
        <Box sx={{...styles.SearchList, display: dropdown? "block" : "none"}}>
            <List >
                {filteredOptions.length > 0? filteredOptions.map((i) => 
                  <ListItem 
                    onClick={(e) => handleSelection(e)} 
                    sx={{cursor: "pointer", '&:hover': {backgroundColor: "rgba(5, 5, 51, 0.5)"}}} 
                    key={i}
                  >
                    {i}
                  </ListItem>) : 
                  <ListItem>No results found</ListItem>
                }
            </List>
        </Box>
      </OutsideClickHandler>
    </Box>
  )
}

export default FormGenericDropDown
