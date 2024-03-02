import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "./styles/globalStyles";
import { Home } from "./pages";
import "react-toastify/dist/ReactToastify.css";


function App() {
    return (
      <>
        <GlobalStyles />
        <ToastContainer />
        <Home />
      </>
    );
  }
  
  export { App };