import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [cartList, setCartList] = useState([]);

  const addCartProduct = (newCartProduct) => {
    const filterProducts = cartList.filter(
      (product) => product.id === newCartProduct.id
    );
    if (filterProducts.length == 0) {
      setCartList([...cartList, newCartProduct]);
      toast.success("Item adicionado ao carrinho");
    } else {
      toast.error("Item já adicionado ao carrinho");
    }
  };

  const removeCartProduct = (removeId) => {
    const newProductList = cartList.filter(
      (product) => product.id !== removeId
    );
    setCartList(newProductList);
  };

  const total = cartList.reduce((prevValue, product) => {
    return prevValue + Number(product.price);
  }, 0);

  const totalProducts = cartList.reduce((prevValue, product) => {
    return cartList.length;
  }, 0);

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
        removeCartProduct,
        total,
        totalProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
