import { useState } from "react"
import { api } from "../api/axios"

export const HandleProductContext = createContext({})

export const HandleProductProvider = ({children}) => {
    const [handleProductList, setHandleProductList] = useState([])
    const createProduct = async (FormData) => {
       
        try {
            const token = localStorage.getItem("@TOKEN")
            const { data } = await api.post("/products", FormData, {headers:{
                Authorization: `Bearer${token}`
            }})
            setHandleProductList([...handleProductList, data])
        } catch (error) {
            console.error()
        }
    }
    return(
        <HandleProductContext.Provider value = {{}}>
            {children}
        </HandleProductContext.Provider>
    )
}