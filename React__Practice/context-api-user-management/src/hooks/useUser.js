import { useContext } from "react";
import UserContext from "../assets/context/userContext";

const useUser = () => {
    return useContext(UserContext)
}

export default useUser;