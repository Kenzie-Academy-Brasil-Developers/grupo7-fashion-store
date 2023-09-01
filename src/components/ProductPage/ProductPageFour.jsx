import { useContext } from "react";
import { ProductsContext } from "../../providers/ProductsContext";
import { useEffect } from "react";
import { api } from "../../api/axios";
import { MainProduct } from "./MainProduct";
import { SecondaryProducts } from "./SecondaryProducts";
import { HeaderHomePage } from "../HeaderHomePage/HeaderHomePage";
import { Footer } from "../Footer";
import styles from "./styles.module.scss";


export const ProductPageFour = () => {
  const { products, setProducts, cartList } = useContext(ProductsContext);
  // const { isVisible } = useContext(ProductsContext);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await api.get("/products");
        setProducts(data);
      } catch (error) {}
    };
    getAllProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("@cartListItems", JSON.stringify(cartList));
  }, [cartList]);

  // {isVisible ? <CartModal /> : null}

  return (
    <>
      <HeaderHomePage/>
      <main className={` container`}>
        {products.map((product) =>
          product.id == 4 ? (
            <MainProduct key={product.id} product={product} />
          ) : null
        )}
      </main>
      <section className="container">
        <h2 className="title two">VEJA TAMBÉM</h2>
        <ul className={styles.productList}>
          {products.map((product) =>
            product.id != 4 ? (
              <SecondaryProducts key={product.id} product={product} />
            ) : null
          )}
        </ul>
      </section>
      <Footer />
    </>
  );
};
