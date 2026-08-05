import axios from "axios"
import { toast } from "react-toastify"
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
})



export async function  getUserData() {
   try {
    const response = await api.get("")
    return response.data
   } catch (error) {
          toast.error(error.message);
        return []
   } 
}

export async function getSingleUser(userId) {
  try {
    const response = await api.get(`/${userId}`);
   
    return response.data;
  } catch (error) {
   toast.error(error.message);
    return null;
  }
}