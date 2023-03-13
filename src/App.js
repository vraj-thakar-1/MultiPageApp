import "./App.css";
import Welcome from "./components/pages/Welcome";
import { Route, Routes, Navigate } from "react-router-dom";
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
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />

          <Route path="/product" element={<Product />} />

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
