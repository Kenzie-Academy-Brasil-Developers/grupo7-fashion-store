import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.flexbox}>
          <img src={Logo} alt="Logo Fashion Store" />
        </div>
      </div>
    </header>
  );
};
