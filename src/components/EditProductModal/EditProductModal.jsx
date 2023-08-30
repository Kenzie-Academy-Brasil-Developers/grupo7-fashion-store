import { AiOutlineClose } from "react-icons/ai";
import { Input } from "../Input/input";
import { TextArea } from "../TextArea";
import { BiPencil } from "react-icons/bi";
import { useForm } from "react-hook-form";

export const EditProductModal = () => {
  const { register, handleSubmit } = useForm({});

  const submitEditProduct = (formData) => {};

  return (
    <div>
      <div>
        <div>
          <h3>EDITAR PRODUTO</h3>
          <button title="fechar" aria-label="close">
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
