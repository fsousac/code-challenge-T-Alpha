import Login from "./components/Login";
import ListProducts from "./components/ListProducts";
import Register from "./components/Register";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import "./App.css";

function App() {
  return (
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
