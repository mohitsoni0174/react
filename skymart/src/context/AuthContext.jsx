import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => { 

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    return <AuthContext.Provider value={{
        users,
        setUsers,
        user,
        setUser,
        showPassword,
        setShowPassword,
        showConfirmPassword,
        setShowConfirmPassword
    }} >
        {children}
    </AuthContext.Provider>
}


