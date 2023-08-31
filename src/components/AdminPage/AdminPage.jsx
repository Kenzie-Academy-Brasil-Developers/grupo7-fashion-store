import { Link } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const AdminPage = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <>
      <Header />
      <div className="container">
        <div>
          <button onClick={() => userLogout()}>
            <BiLogOutCircle size={23} />
          </button>
        </div>
        <div>
          <Link to="/admin">Início</Link>
          <Link to="/handleproducts">Produtos</Link>
        </div>
        <div>
          <h2>PAINEL DO ADMINISTRADOR</h2>
          <p>Seja bem vindo, administrador</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
