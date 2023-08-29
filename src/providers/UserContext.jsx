import { createContext } from "react";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {

    const navigate = useNavigate()
    const [user, setUser] = useState(false)

    const submitRegister = async (formData) => {
        try {
            const response = await api.post("/users", formData)
            console.log(response)
            localStorage.setItem("@token", JSON.stringify(response.data.accessToken))
            setUser(true)
            console.log(formData)
            alert("Usuario criado com sucesso")
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <UserContext.Provider value={{submitRegister}}>
            {children}
        </UserContext.Provider>
    )
}