import { Link } from "react-router-dom"
import { Input } from "../Input/input"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "./formSchemaRegister"

export const RegisterPage = () => {

    const { register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(registerSchema)
    })

    const { submitRegister } = useContext(UserContext)

    return (
        <>
            <header>
                <h2>FASHIONSTORE</h2>
            </header>
            <main>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <form onSubmit={handleSubmit(submitRegister)}>
                        <Link to={"/login"}>Voltar</Link>
                        <h1>CADASTRAR-SE</h1>
                        <p>Seja bem-vindo, administrador!</p>
                        <Input type="text" placeholder="NOME" {...register("name")} error={errors.name}></Input>
                        <Input type="email" placeholder="E-MAIL" {...register("email")} error={errors.email}></Input>
                        <Input type="password" placeholder="SENHA" {...register("password")} error={errors.password}></Input>
                        <Input type="password" placeholder="CONFIRMAR SENHA" {...register("confirmPassword")} error={errors.confirmPassword}></Input>
                        <button type="submit">Cadastrar-se</button>
                    </form>
                </div>
            </main>
            <footer>
                <h3>Todos os direitos reservados - Kenzie Academy Brasil</h3>
            </footer>
        </>
    )
}