import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ProductsContext } from "../../providers/ProductsContext"

export const SecondaryProducts = ({ product }) => {
    const { addCartProduct } = useContext(ProductsContext)
    const navigate = useNavigate()
    const naviProducts = () => {
        navigate(`/product/${product.id}`)
    }
    return (
        <>
            <li>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <h4>R$ {product.price}</h4>
                <div>
                    <button onClick={() => addCartProduct(product)}>Adicionar</button>
                    <button onClick={naviProducts}>SAIBA MAIS</button>
                </div>
            </li>
        </>
    )
}