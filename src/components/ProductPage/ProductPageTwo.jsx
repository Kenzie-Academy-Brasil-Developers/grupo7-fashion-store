import { useContext } from "react";
import { ProductsContext } from "../../providers/ProductsContext";
import { useEffect } from "react";
import { api } from "../../api/axios";
import { MainProduct } from "./MainProduct";
import { SecondaryProducts } from "./SecondaryProducts";

export const ProductPageTwo = () => {

    const { products, setProducts } = useContext(ProductsContext);

    useEffect(() => {
        const getAllProducts = async () => {
          try {
            const { data } = await api.get("/products");
            setProducts(data);
          } catch (error) {
          }
        };
        getAllProducts();
      }, []);



    return (
        <>
            <header>
                <h2>FASHIONSTORE</h2>
                <img src="" alt="" />
            </header>
            <main>
                {products.map((product) => (
                    product.id == 2 ? <MainProduct key={product.id} product={product} /> : null
                ))}      
             </main>
             <section>
                <h2>VEJA TAMBÉM</h2>
                {products.map((product) => (
                    product.id != 2 ? <SecondaryProducts key={product.id} product={product}/> : null
                ))}
             </section>
        </>
    )
}