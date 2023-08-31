import { createContext, useEffect } from "react";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@id");

    const autoLogin = async () => {
      try {
        await api.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(true);
      } catch (error) {}
    };
    autoLogin()
  }, []);

  const userLogout = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("@TOKEN");
    toast.warning("Deslogando...");
  };

  const submitLogin = async (formData) => {
    try {
      const response = await api.post("/login", formData);
      console.log(response);
      setUser(true);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@id", response.data.user.id);
      toast.success("Login realizado com sucesso!");
      navigate("/admin");
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
    <UserContext.Provider
      value={{ submitRegister, submitLogin, userLogout, user }}
    >
      {children}
    </UserContext.Provider>
  );
};
