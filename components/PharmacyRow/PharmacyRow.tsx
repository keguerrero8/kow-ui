import Link from 'next/link'
import { TableCell, TableRow } from '@mui/material';

const PharmacyRow: React.FC<PharmacyProps> = ({ pharmacy }) => {
    const { id, name, address, zipcode, phone_number } = pharmacy

    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell align="center">
            <Link href={`dashboard/pharmacies/${id}`} style={{color: "#154161"}}>
              {name}
            </Link>
          </TableCell>
          <TableCell align="center">{address}</TableCell>
          <TableCell align="center">{zipcode}</TableCell>
          <TableCell align="center">{phone_number}</TableCell>
        </TableRow>
      </>
  );
}

export default PharmacyRow