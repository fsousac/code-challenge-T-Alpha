import Routes from "./routes";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import ListProducts from "./components/ListProducts";
import Register from "./components/Register";
import CreateProduct from "./components/CreateProduct";
import GetProduct from "./components/GetProduct ";
import EditProduct from "./components/EditProduct";
import DeleteProduct from "./components/DeleteProduct";
import "./App.css";

function App() {
  return (
    // <Routes />
    <div>
      <Login />
      <Register />
      <CreateProduct />
      <EditProduct />
      <ListProducts />
    </div>
  );
}

export default App;
