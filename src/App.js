import AppRouter from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  let verified = 0;
  if (verified === 0) {
    window.addEventListener("load", localStorage.setItem("logged", false));
    verified = 1;
  }
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
