import { createContext } from "react";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {

    const navigate = useNavigate()
    const [user, setUser] = useState(false)

    const submitLogin = async (formData) => {
        try {
          const response = await api.post("/login", formData);
          setUser(true);
          localStorage.setItem("@TOKEN", response.data.accessToken);
          navigate("/product");
        } catch (error) {
            console.log(error)
        }
      }

    const submitRegister = async (formData) => {
        try {
            const response = await api.post("/users", formData)
            alert("Usuario criado com sucesso")
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <UserContext.Provider value={{submitRegister, submitLogin}}>
            {children}
        </UserContext.Provider>
    )
}