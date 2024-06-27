import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Category from "./Pages/Category";
import AllProducts from "./Components/AllProducts";
import ProductDetails from "./Pages/ProductDetails";
import Foooter from "./Components/Foooter";

function App() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Products" element={<AllProducts />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/Category/:name" element={<Category />} />
        </Routes>
      </div>
      <Foooter />
    </div>
  );
}

export default App;
