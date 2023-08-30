import { useContext } from "react";
import { CrudProductCard } from "../CrudProductCard";
import { DefaultTemplate } from "../DefaultTemplate";
import { CrudProductContext } from "../../providers/HandleProductContext";
import { NewProductModal } from "../NewProductModal/NewProductModal";

export const HandleProducts = () => {
  const { createNewProductModal, setCreateNewProductModal } =
    useContext(CrudProductContext);

  return (
    <section>
      <DefaultTemplate>
        <div>
          <h2>Inicio</h2>
          <h2>Produtos</h2>
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
        <CrudProductCard />
      </DefaultTemplate>
    </section>
  );
};
