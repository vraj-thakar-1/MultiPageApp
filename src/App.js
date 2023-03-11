import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/pages/Welcome";
import { Route, Routes } from "react-router-dom";
import Product from "./components/pages/Product";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./components/pages/ProductDetails";

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>

      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
        <Routes>
          <Route path="/product" element={<Product />} />
        </Routes>
        <Routes>
          <Route
            path="/product-detail/:productId"
            element={<ProductDetails />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
