import { useContext } from "react";
import { HomePage } from "../../components/HomePage/HomePage";
import { ProductsContext } from "../../providers/ProductsContext";
import { CartModal } from "../../components/CartModal/CartModal";

export const ProductsPage = () => {
  const { isVisible } = useContext(ProductsContext);
  return (
    <>
      <HomePage />
      {isVisible ? <CartModal /> : null}
    </>
  );
};
