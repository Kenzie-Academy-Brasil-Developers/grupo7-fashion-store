import { useContext } from "react";
import { ProductsContext } from "../../providers/ProductsContext";
import styles from "./styles.module.scss";
import Logo from "../../assets/Logo.svg";
import { BsCart3 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export const HeaderHomePage = () => {
  const { setIsVisible } = useContext(ProductsContext);
  return (
    <header>
      <div className={`container ${styles.flexBox}`}>
        <img src={Logo} alt="Logo Fashion Store" />
        <div className={styles.icons}>
          <Link className={styles.user} to="/login">
            <BiUserCircle size={30} />
          </Link>
          <button onClick={() => setIsVisible(true)}>
            <BsCart3 size={30} />
          </button>
        </div>
      </div>
    </header>
  );
};
