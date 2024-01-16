import { Dispatch, SetStateAction, useState } from 'react'

import pharmacistService from '@/lib/pharmacistService'

import { IconButton, TableCell, TableRow, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface PharmacistRowProps {
    pharmacist: GetPharmacistResponseSuccess
    pharmacistsUpdate: boolean
    setPharmacistsUpdate: Dispatch<SetStateAction<boolean>>
}

const PharmacistRow: React.FC<PharmacistRowProps> = ({ pharmacist, pharmacistsUpdate, setPharmacistsUpdate }) => {
    const { name, phone_number, id, isEnrolled } = pharmacist
    const [checked, setChecked] = useState<boolean>(isEnrolled)

    const updatePharmacist = async (pharmacistUpdateData: UpdatePharmacistData) => {
        const updatedPharmacist = await pharmacistService.updatePharmacist(id, pharmacistUpdateData)
        // FIXME add some logic here for error handling if the updatePharmacist call failed
        // and display an error message about the failure
        setChecked(updatedPharmacist.isEnrolled)
    }

    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        updatePharmacist({ isEnrolled: e.target.checked })
    }

    const deletePharmacist = async (pharmacist_id: number) => {
        const isDeleted = await pharmacistService.deletePharmacist(pharmacist_id)
        // FIXME add some logic here for error handling if the updatePharmacist call failed
        // and display an error message about the failure
        if (isDeleted) setPharmacistsUpdate(!pharmacistsUpdate)
    }

    function handleDelete () {
        deletePharmacist(id)
    }

  return (
    <TableRow >
        <TableCell align="center">{name}</TableCell>
        <TableCell align="center">{phone_number}</TableCell>
        <TableCell align="center">
            <Checkbox
                checked={checked}
                onChange={handleChange}
            />
        </TableCell>
        <TableCell align="center">
            <IconButton color="primary" onClick={handleDelete}>
                <DeleteIcon/>
            </IconButton>
        </TableCell>
    </TableRow>
  )
}

export default PharmacistRow
