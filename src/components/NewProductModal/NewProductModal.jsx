import { AiOutlineClose } from "react-icons/ai";
import { Input } from "../Input/input";
import { TextArea } from "../TextArea";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewProductSchema } from "./NewProductSchema";
import { useContext } from "react";
import { CrudProductContext } from "../../providers/HandleProductContext";
import styles from "./styles.module.scss";

export const NewProductModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(NewProductSchema),
  });

  const { setCreateNewProductModal, createProductRequest } =
    useContext(CrudProductContext);

  const submitNewProduct = (formData) => {
    createProductRequest(formData);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.subModal}>
        <div className={styles.container}>
          <h3 className="title three">NOVO PRODUTO</h3>
          <button
            onClick={() => setCreateNewProductModal(false)}
            title="fechar"
            aria-label="close"
            className={styles.close}
          >
            <AiOutlineClose size={25} />
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
            className={styles.textArea}
          />
          <div className={styles.button}>
            <button type="submit" className="btn__black">
              <AiOutlinePlusCircle size={25}/>
              NOVO PRODUTO
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
