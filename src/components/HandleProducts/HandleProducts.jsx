import Logo from "../../assets/Logo.svg"
export const HandleProducts = () => {
  return (
    <main>
       <div>
          <img src={Logo} alt="Logo Fashion Store" />
        </div>
      <div>
        <h2>Inicio</h2>
        <h2>Produtos</h2>
      </div>
      <div>
        <h1>Produtos</h1>
        <span>Gerencie os produtos do catálogo</span>
      </div>
      <div>
        <button>
            Novo produto
        </button>
      </div>
    </main>
  );
};
