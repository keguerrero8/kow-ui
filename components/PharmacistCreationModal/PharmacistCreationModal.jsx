import { useState } from 'react';

import pharmacistService from '@/lib/pharmacistService'
import { styles } from './PharmacistCreationModal-styles';

import { Box, Button, Typography, Modal, TextField } from "@mui/material"

export default function PharmacistCreationModal({ pharmacyId, pharmacistsUpdate, setPharmacistsUpdate }) {
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([])
  const [pharmacistData, setPharmacistData] = useState({name: "", phone_number: "", isEnrolled: false})

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setErrors([])
    setPharmacistData({name: "", phone_number: "", isEnrolled: false})
  }
  const handleChange = (e) => setPharmacistData({...pharmacistData, [e.target.name]: e.target.value})

  const createPharmacist = async () => {
    const response = await pharmacistService.createPharmacist(pharmacyId, pharmacistData)
    if (!response.errors) {
      setErrors([])
      setPharmacistsUpdate(!pharmacistsUpdate)
    } else {
      setErrors(response.errors)
    }
  }

  function handleSubmit (e) {
    e.preventDefault()
    createPharmacist()
  }

  return (
    <>
      <Button onClick={handleOpen} variant="contained" size="medium" sx={{color: "white"}}>
        Add Pharmacist
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={styles.ModalContainer} component="form" noValidate onSubmit={handleSubmit}>
          <Typography variant="h5">Add a Pharmacist</Typography>
          <TextField label="Name" variant="outlined" name="name" onChange={handleChange}/>
          <TextField placeholder="Please enter 10 digits" label="Phone Number" variant="outlined" name="phone_number" onChange={handleChange}/>
          {errors.map(e => <Typography sx={{color: "red"}} key={e}>{e}</Typography>)}
          <Button variant="contained" sx={{width: "30%", margin: "auto", color: "white"}} type="submit">Add</Button>
          <Button onClick={handleClose} sx={{position: "absolute", right: "0px", bottom: "0px"}}>CLOSE</Button>
        </Box>
      </Modal>
    </>
  );
}