import React, { useState } from 'react'

import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import PharmacyTable from '@/components/PharmacyTable/PharmacyTable';
import { useUser } from '@/context/user';

import { Box } from '@mui/material';
import Page404 from '@/pages/404';
  
const DashboardSection: React.FC<PharmaciesProps> = ({ pharmacies }) => {
    const [search, setSearch] = useState("")
    const { isAuthenticated } = useUser()

    if (!isAuthenticated) return <Page404 isAuthFailure={!isAuthenticated}/>

    let filteredPharmacies = []
    if (pharmacies.length >= 0) {
        filteredPharmacies = pharmacies.filter(p => 
            p.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) || p.zipcode.startsWith(search))
    }

    return (
        <Box sx={{maxWidth: "1200px", margin: "auto", minHeight: "100vh"}}>
            <SearchBar setSearch={setSearch} search={search}/>
            <PharmacyTable pharmacies={filteredPharmacies}/>
        </ Box>
    );
}

export default DashboardSection
