import React, { useState } from 'react'

import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import PharmacyTable from '@/components/PharmacyTable/PharmacyTable.jsx';
import { useUser } from '@/context/user';
// import Page404 from './Page404';

import { Box } from '@mui/material';
  
export default function DashboardSection({ pharmacies }) {
    const [search, setSearch] = useState("")
    const { isAuthenticated } = useUser()

    if (!isAuthenticated) return <h1>not authenticated! implement 404 redirect</h1>

    const filteredPharmacies = pharmacies.filter(p => 
        p.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) || p.zipcode.startsWith(search))

    return (
        <Box sx={{maxWidth: "1200px", margin: "auto", minHeight: "100vh"}}>
            <SearchBar setSearch={setSearch} search={search}/>
            <PharmacyTable filteredPharmacies={filteredPharmacies}/>
        </ Box>
    );
}
