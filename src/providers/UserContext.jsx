import { createContext } from "react";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  const submitLogin = async (formData) => {
    try {
      const response = await api.post("/login", formData);
      setUser(true);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      toast.success("Login realizado com sucesso!");
      navigate("/handleproducts");
    } catch {
      toast.error("Não foi possível realizar o login");
    }
  };

  const submitRegister = async (formData) => {
    try {
      const response = await api.post("/users", formData);
      toast.success("Conta criada com sucesso");
      navigate("/login");
    } catch {
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <UserContext.Provider value={{ submitRegister, submitLogin }}>
      {children}
    </UserContext.Provider>
  );
};
