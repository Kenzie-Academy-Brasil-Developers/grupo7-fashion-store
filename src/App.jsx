import "./styles/index.scss";
import { RounterMain } from "./router/routerMain";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <RounterMain />
      <ToastContainer position="top-right" autoClose={1300} theme="dark" />
    </>
  );
};

export default App;
