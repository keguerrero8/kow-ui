import PharmacyRow from '@/components/PharmacyRow/PharmacyRow.jsx'

import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

export default function PharmacyTable({ filteredPharmacies }) {
  return (
    <Box sx={{width: "90%", margin: "50px auto"}}>
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Address</TableCell>
                        <TableCell align="center">Zip Code</TableCell>
                        <TableCell align="center">Phone Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredPharmacies.map(pharmacy => <PharmacyRow key={pharmacy.id} row={pharmacy} /> )}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
  )
}
