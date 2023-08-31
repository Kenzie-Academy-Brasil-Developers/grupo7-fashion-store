import "./styles/index.scss";
import { RounterMain } from "./router/routerMain";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export const App = () => {
  return (
    <>
      <RounterMain/>
      <ToastContainer autoClose={1.5 * 1000} />
    </>
  )
};

export default App;
