import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users"
})

export async function getUser() {
    try {
        const response = await api.get("")
            return response.data
        
    } catch (error) {
        console.error(error)
        throw error
    }
}