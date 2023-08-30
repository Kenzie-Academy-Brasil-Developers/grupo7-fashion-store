import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
export const ProductList = ({ product }) => {
  return (
    <li>
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <h2>{product.name}</h2>
        <span>{product.price}</span>
        <div>
          <AiOutlineEdit />
          <AiOutlineDelete />
        </div>
      </div>
    </li>
  );
};
