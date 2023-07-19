import { TextField, InputAdornment, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export default function SearchBar({ search, setSearch }) {

  return (
    <Box sx={{width: "90%", margin: "100px auto 20px auto", textAlign: "center"}}>
        <TextField
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          label="Search by Name or Zip Code..."
          sx={{ m: 1, width: {xs: "90%", sm: "90%", md: '50%'} }}
          InputProps={{
            startAdornment: 
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>,
          }}
        />
    </Box>
  )
}
