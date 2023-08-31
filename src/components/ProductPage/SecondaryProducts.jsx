export const SecondaryProducts = ({ product }) => {

    return (
        <>
            <li>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <h4>R$ {product.price}</h4>
                <div>
                    <button>Adicionar</button>
                    <button>SAIBA MAIS</button>
                </div>
            </li>
        </>
    )
}