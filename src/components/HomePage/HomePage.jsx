import FotoBanner from "../../assets/FotoBanner.png";
import styles from "./styles.module.scss";

import { Footer } from "../Footer";
import { ProductCard } from "../ProductCard/ProductCard";
import { useContext, useEffect, useState } from "react";
import { api } from "../../api/axios";
import { Link, Navigate } from "react-router-dom";
import { ProductsContext } from "../../providers/ProductsContext";
import { HeaderHomePage } from "../HeaderHomePage/HeaderHomePage";

export const HomePage = () => {
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await api.get("/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);
  
  console.log(products);
  return (
    <>
      <HeaderHomePage />
      <div className={`container ${styles.bannerBox}`}>
        <img src={FotoBanner} alt="Foto com 3 mulheres sorrindo" />
        <div className={styles.titleBox}>
          <h1 className={`title one ${styles.logoTitle}`}>
            KENZIE <br />
            FASHION
            <br />
            STORE
          </h1>
          <button className="btn__black">CONFIRA AS OFERTAS</button>
        </div>
      </div>
      <section className="container">
        <div className={styles.productsSection}>
          <h2 className="title two">PRODUTOS EM DESTAQUE</h2>
          <ul className={styles.productsList}>
            {products.map((product) => (
              <ProductCard key={crypto.randomUUID()} product={product} />
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
};
