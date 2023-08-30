import { useContext } from "react"
import { HandleProductContext } from "../../providers/HandleProductContext"

export const ProductCard = () => {
    const { handleProductList } = useContext(HandleProductContext)
    return(
        <ul>
            {ProductList.map((product => (
                <ProductList key={product.id} product={product} />
            )))}
        </ul>
    )
}