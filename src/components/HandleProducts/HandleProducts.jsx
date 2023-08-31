import { useContext } from "react";
import { CrudProductCard } from "../CrudProductCard";
import { DefaultTemplate } from "../DefaultTemplate";
import { CrudProductContext } from "../../providers/HandleProductContext";
import { NewProductModal } from "../NewProductModal/NewProductModal";
import { EditProductModal } from "../EditProductModal/EditProductModal";
import { Link } from "react-router-dom";

export const HandleProducts = () => {
  const { createNewProductModal, setCreateNewProductModal, editingProduct } =
    useContext(CrudProductContext);

  return (
    <section>
      <DefaultTemplate>
        <div>
          <Link to="/admin">INÍCIO</Link>
          <Link to="/handleproducts">PRODUTOS</Link>
        </div>
        <div>
          <h1>Produtos</h1>
          <span>Gerencie os produtos do catálogo</span>
        </div>
        <div>
          <button onClick={() => setCreateNewProductModal(true)}>
            Novo produto
          </button>
        </div>
        {createNewProductModal ? <NewProductModal /> : null}
        {editingProduct ? <EditProductModal /> : null}
        <CrudProductCard />
      </DefaultTemplate>
    </section>
  );
};
