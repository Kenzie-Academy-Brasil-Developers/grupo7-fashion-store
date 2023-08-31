import { AiOutlineClose } from "react-icons/ai";
import { Input } from "../Input/input";
import { TextArea } from "../TextArea";
import { BiPencil } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { CrudProductContext } from "../../providers/HandleProductContext";

export const EditProductModal = () => {
  const { editingProduct, setEditingProduct, updateProductRequest } =
    useContext(CrudProductContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: editingProduct.name,
      price: editingProduct.price,
      description: editingProduct.description,
      image: editingProduct.image,
    },
  });

  const submitEditProduct = (formData) => {
    updateProductRequest(formData);
  };

  return (
    <div>
      <div>
        <div>
          <h3>EDITAR PRODUTO</h3>
          <button
            onClick={() => setEditingProduct(null)}
            title="fechar"
            aria-label="close"
          >
            <AiOutlineClose size={17} />
          </button>
        </div>
        <form onSubmit={handleSubmit(submitEditProduct)}>
          <Input type="text" placeholder="NOME" {...register("name")} />
          <Input
            type="number"
            placeholder="PREÇO (R$)"
            {...register("price")}
          />
          <Input
            type="text"
            placeholder="IMAGEM (URL)"
            {...register("description")}
          />
          <TextArea placeholder="DESCRIÇÃO RESUMIDA" {...register("image")} />
          <button type="submit">
            <BiPencil />
            EDITAR PRODUTO
          </button>
        </form>
      </div>
    </div>
  );
};
