import { useContext } from "react";
import { MdOutlineModeEdit } from "react-icons//md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CrudProductContext } from "../../../providers/HandleProductContext";

export const CrudProductList = ({ product }) => {
  const { deleteProductRequest, setEditingProduct } =
    useContext(CrudProductContext);

  return (
    <li>
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <h2>{product.name}</h2>
        <span>{product.price}</span>
        <div>
          <button onClick={() => setEditingProduct(product)}>
            <MdOutlineModeEdit size={22} />
          </button>
          <button onClick={() => deleteProductRequest(product.id)}>
            <RiDeleteBin5Line size={22} />
          </button>
        </div>
      </div>
    </li>
  );
};
