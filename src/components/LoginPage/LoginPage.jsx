import { Link } from "react-router-dom";
import { DefaultTemplate } from "../DefaultTemplate";
import { Input } from "../Input/input";
import { useForm } from "react-hook-form";
import { registerSchema } from "../RegisterPage/formSchemaRegister";
import { loginSchema } from "./formSchemaLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import logo from "../../assets/login.png";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { submitLogin } = useContext(UserContext);

  return (
    <DefaultTemplate>
      <section>
        <img src={logo} alt="logo login" />
        <form onSubmit={handleSubmit(submitLogin)}>
          <h2>ENTRAR</h2>
          <Input
            type="text"
            placeholder="E-MAIL"
            {...register("email")}
            error={errors.email}
          />
          <Input
            type="password"
            placeholder="SENHA"
            {...register("password")}
            error={errors.password}
          />

          <div>
            <button>ACESSAR</button>
            <Link to="/register">CADASTRE-SE</Link>
          </div>
        </form>
      </section>
    </DefaultTemplate>
  );
};
