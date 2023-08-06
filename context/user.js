import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const UserContext = createContext()

const ContextProvider = ({ children }) => {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)
    const [loginErrors, setLoginErrors] = useState([])

    useEffect(() => {
        // this fetch request still needs to be implemented correctly but here we send our credentials to get the user info
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
        console.log("the user is: ", user)
      }, [])

      const login = (formData) => {
        // this post request is to get us logged in and authenticated
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
                    if (res.success) {
                        setIsAuthenticated(true)
                        router.push("/dashboard")
                        setLoginErrors([])
                    } else {
                        setIsAuthenticated(false)
                        setLoginErrors([res.error])
                    }
                })
            }
            else {
                setIsAuthenticated(false)
                setLoginErrors(["Something went wrong, please try again or contact the administrator"])
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