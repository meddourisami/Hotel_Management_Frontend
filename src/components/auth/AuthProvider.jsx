import { jwtDecode } from 'jwt-decode'
import React, { createContext, useState } from 'react'

export const AuthContext = createContext({
    user: null,
    handleLogin: () => { },
    handleLogout: () => { }
})

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    const handleLogin = (token) => {
        const decodedToken = jwtDecode(token)
        localStorage.setItem('userId', decodedToken.sub)
        localStorage.setItem('userRole', decodedToken.roles)
        localStorage.setItem('token', token)
        setUser(decodedToken)
    }

    const handleLogout = () => {
        localStorage.removeItem('userId')
        localStorage.removeItem('userRole')
        localStorage.removeItem('token')
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{user, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
  )
}

export default AuthProvider