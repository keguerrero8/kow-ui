import { useState } from 'react';
import { useRouter } from 'next/router'
import { styles } from './LoginForm-styles';

import { Box, TextField, Button, Typography } from '@mui/material';
import Cookies from "js-cookie"

import CSRFToken from '@/components/CSRFToken/CSRFToken.jsx';

// export default function LoginPage({setUser}) {
export default function LoginPage() {
    const router = useRouter()
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    function handleSubmit (e) {
        e.preventDefault()
        fetch("http://127.0.0.1:8000/auth-sessions/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken")
            },
            body: JSON.stringify(formData)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(res => {
                    if (res.success) {
                        // setUser(res.success)
                        console.log(res.success)
                        router.push("/dashboard")
                    } else {
                        setErrors([res.error])
                    }
                })
            }
            else {
                setErrors(["Something went wrong, please try again or contact the administrator"])
            }
        })
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
            <CSRFToken />
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
            {errors.map(e => <Typography sx={{color: "red"}} key={e}>{e}</Typography>)}
            <Button type="submit" variant="contained" sx={{color: "white"}} size="large">sign in</Button>
        </Box>
    </Box>
  )
}
