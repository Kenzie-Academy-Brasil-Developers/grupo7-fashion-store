import { useContext } from "react";
import { ProductsContext } from "../../providers/ProductsContext";
import styles from "./styles.module.scss";
import { MdClose } from "react-icons/md";

export const CartModal = () => {
  const { setIsVisible, products, cartList } = useContext(ProductsContext);

  return (
    <div role="dialog" className={styles.dialog}>
      <div className={styles.modalBox}>
        <div className={`${styles.titleBox}`}>
          <p className={`${styles.titleRelative} title`}>CARRINHO</p>
          <button
            aria-label="close"
            title="Fechar"
            onClick={() => setIsVisible(false)}
          >
            <MdClose size={21} />
          </button>
        </div>
        <div className={styles.cartItems}>
          {cartList == 0 ? (
            <p className={styles.noItem}>Nenhum item no carrinho</p>
          ) : (
            <ul>
              {cartList.map((product) => (
                <CartItemCard
                  key={crypto.randomUUID()}
                  product={product}
                 
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
