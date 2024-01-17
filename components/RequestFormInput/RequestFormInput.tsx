import { Box, TextField, Typography } from '@mui/material'
import { ChangeEvent, Dispatch } from 'react'

interface RequestFormInputProps {
  flex: number
  label: string
  name: string
  handleChange: Dispatch<ChangeEvent<HTMLTextAreaElement>>
  requestData: RequestData
  isRequired: boolean
  placeholder: string
}

const RequestFormInput: React.FC<RequestFormInputProps> = ({ flex, label, name, handleChange, requestData, isRequired = false, placeholder="" }) => {

  return (
    <Box sx={{flex: flex}}>
        <Typography color="black" component="h6" sx={{mb: "5px", fontSize: {xs: "1rem", sm: "1rem", md: "1.4rem"}}}>
          {label}{isRequired? <span style={{color: "red"}}> &#42;</span> : null}
        </Typography>
        <TextField sx={{width: "100%"}} onChange={handleChange} value={requestData[name]} name={name} placeholder={placeholder}/>
    </Box>
  )
}

export default RequestFormInput