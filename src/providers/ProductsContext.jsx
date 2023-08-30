import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [cartList, setCartList] = [];

  const addCartProduct = (newCartProduct) => {
    if (!cartList.some((cartItem) => cartItem.id == newCartProduct.id)) {
      setCartList(newCartProduct);
      toast.success("Item adicionado ao carrinho com sucesso");
    } else {
      toast.error("Item já adicionado ao carrinho");
    }
  };

  console.log(cartList);

  return (
    <ProductsContext.Provider
      value={{
        isVisible,
        setIsVisible,
        products,
        setProducts,
        addCartProduct,
        cartList,
        setCartList,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
