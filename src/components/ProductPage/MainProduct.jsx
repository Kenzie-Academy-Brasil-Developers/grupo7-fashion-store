import { useContext } from "react";
import { ProductsContext } from "../../providers/ProductsContext";

export const MainProduct = ({ product }) => {

    const { addCartProduct} = useContext(ProductsContext)

    return (
        <>      
            <div>
                <h3>Home : {product.name}</h3>
            </div>
            <main>
                <div>
                    <img src={product.image} alt={product.name} />
                </div>
                <div>
                    <h3>{product.name}</h3>
                    <h4>R$ {product.price}</h4>
                    <p>{product.description}</p>
                </div>
            </main>
            <button onClick={() => addCartProduct(product)}>
                Adicionar ao carrinho
            </button>
        </>
    )
}