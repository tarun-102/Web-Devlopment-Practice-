import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import useTheme from "../../../themechanger/src/hooks/useTheme";

const useAuth = () => {
    return (
        useContext(AuthContext)
    )
}

export default useAuth;