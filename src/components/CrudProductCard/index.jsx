import { useContext } from "react";
import { CrudProductContext } from "../../providers/HandleProductContext";
import { CrudProductList } from "./CrudProductList";

export const CrudProductCard = () => {
  const { crudProductList } = useContext(CrudProductContext);

  return (
    <ul>
      {crudProductList.map((product) => (
        <CrudProductList key={product.id} product={product} />
      ))}
    </ul>
  );
};
