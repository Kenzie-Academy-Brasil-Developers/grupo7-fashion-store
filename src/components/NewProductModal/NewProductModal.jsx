import { AiOutlineClose } from "react-icons/ai";
import { Input } from "../Input/input";
import { TextArea } from "../TextArea";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewProductSchema } from "./NewProductSchema";

export const NewProductModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(NewProductSchema),
  });

  const submitNewProduct = (formData) => {};

  return (
    <div>
      <div>
        <div>
          <h3>NOVO PRODUTO</h3>
          <button title="fechar" aria-label="close">
            <AiOutlineClose size={17} />
          </button>
        </div>
        <form onSubmit={handleSubmit(submitNewProduct)}>
          <Input
            type="text"
            placeholder="NOME"
            {...register("name")}
            error={errors.name}
          />
          <Input
            type="number"
            placeholder="PREÇO (R$)"
            {...register("price")}
            error={errors.price}
          />
          <Input
            type="text"
            placeholder="IMAGEM (URL)"
            {...register("description")}
            error={errors.description}
          />
          <TextArea
            placeholder="DESCRIÇÃO RESUMIDA"
            {...register("image")}
            error={errors.image}
          />
          <button type="submit">
            <AiOutlinePlusCircle />
            NOVO PRODUTO
          </button>
        </form>
      </div>
    </div>
  );
};
