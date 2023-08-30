import { createContext, useEffect, useState } from "react";
import { api } from "../api/axios";

export const CrudProductContext = createContext({});

export const CrudProductProvider = ({ children }) => {
  const [crudProductList, setCrudProductList] = useState([]);
  const [createNewProductModal, setCreateNewProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  console.log(editingProduct);

  useEffect(() => {
    const getProductsRequest = async () => {
      try {
        const { data } = await api.get("/products");
        setCrudProductList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductsRequest();
  }, []);

  const createProductRequest = async (FormData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post("/products", FormData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCrudProductList([...crudProductList, data]);
      alert("Produto adicionado com sucesso");
      setCreateNewProductModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProductRequest = async (deletingId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.delete(`/products/${deletingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newCrudProductList = crudProductList.filter((product) => {
        return product.id !== deletingId;
      });
      setCrudProductList(newCrudProductList);
      alert("Produto excluído com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  const updateProductRequest = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.put(
        `/products/${editingProduct.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newCrudProductList = crudProductList.map((product) => {
        if (product.id === editingProduct.id) {
          return data;
        } else {
          return product;
        }
      });
      setCrudProductList(newCrudProductList);
      alert("produto editado com sucesso!");
      setEditingProduct(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CrudProductContext.Provider
      value={{
        createProductRequest,
        crudProductList,
        deleteProductRequest,
        createNewProductModal,
        setCreateNewProductModal,
        editingProduct,
        setEditingProduct,
        updateProductRequest,
      }}
    >
      {children}
    </CrudProductContext.Provider>
  );
};