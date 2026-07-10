import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [isLogin, setIsLogin] = useState(false)

    const login = (userdata) => {
        setUser(userdata)
        setIsLogin(true)
    }

    const logout = () => {
        setUser(null)
        setIsLogin(false)
    }

    return (
       <AuthContext.Provider value={{login,logout, user,setUser,isLogin,setIsLogin}}>
        {children}
       </AuthContext.Provider>
    )
}

export default AuthProvider