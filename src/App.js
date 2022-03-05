import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import { CartProvider } from "react-use-cart";
import SingleProduct from "./pages/Singleproduct";

function App() {

  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
        
          <Route path="/cart" element={<Cart />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
