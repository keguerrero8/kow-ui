import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const UserContext = createContext()

const ContextProvider = ({ children }) => {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)
    const [loginErrors, setLoginErrors] = useState([])

    useEffect(() => {
        refreshToken()
    }, [])

    const refreshToken = () => {
        fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/refresh`).then(r => {
            if (r.ok) {
                getAuthenticatedUser()
            }
            else {
                setUser(null)
                setIsAuthenticated(false)
            }
        })
    }

    const getAuthenticatedUser = () => {
        fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/user`).then(r => {
            if (r.ok) {
                r.json().then(res => {
                    setUser(res.user)
                    setIsAuthenticated(true)
                })
            }
            else {
                setUser(null)
                setIsAuthenticated(false)
            }
        })
    }

    const login = (formData) => {
        fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/login`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(formData)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(res => {
                    getAuthenticatedUser()
                    router.push("/dashboard")
                    setLoginErrors([])
                })
            } else {
                r.json().then(res => {
                    setIsAuthenticated(false)
                    setLoginErrors([res.error])
                })
            }
        })
    }

    const logout = (closeMobileMenu) => {
        fetch(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/logout`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json", 
            }
        })
        .then(r => {
            if (r.ok) {
                closeMobileMenu()
                setIsAuthenticated(false)
                setUser(null)
            } else {
                closeMobileMenu()
                router.push('/505')
            }
        })
    }

    const value = {
        user,
        login,
        logout,
        loginErrors,
        isAuthenticated,
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)

export default ContextProvider