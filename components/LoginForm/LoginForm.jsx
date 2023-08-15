import { useState } from 'react';
import { styles } from './LoginForm-styles';
import { useUser } from '@/context/user';

import { Box, TextField, Button, Typography } from '@mui/material';
import Page404 from '@/pages/404';

export default function LoginPage() {
    const { login, loginErrors, isAuthenticated } = useUser()
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    if (isAuthenticated) return <Page404 isAuthFailure={!isAuthenticated}/>

    function handleSubmit (e) {
        e.preventDefault()
        login(formData)
    }

    function handleChange (e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

  return (
    <Box sx={styles.MainContainer}>
        <Box component="form" onSubmit={handleSubmit} sx={styles.Container}>
            <Typography component="div" variant="h5" color="primary" sx={styles.SignInText}>
                Sign In
            </Typography>
            <TextField 
                name="username" 
                required 
                onChange={handleChange} 
                value={formData.username} 
                label="Username" 
                variant="outlined" 
                sx={styles.TextFieldName}
            />
            <TextField 
                type="password" 
                name="password" 
                required 
                onChange={handleChange} 
                value={formData.password} 
                label="Password" 
                variant="outlined" 
                sx={styles.TextFieldPassword}
            />
            {loginErrors.map(e => <Typography sx={{color: "red"}} key={e}>{e}</Typography>)}
            <Button type="submit" variant="contained" sx={{color: "white"}} size="large">sign in</Button>
        </Box>
    </Box>
  )
}
