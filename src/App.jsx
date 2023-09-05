import { createContext, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { productsArray } from "./data";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";

export const DataContext = createContext();

const App = () => {
  // global states
  const [product, setProduct] = useState(productsArray);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  // global states
  return (
    <HashRouter>
      <DataContext.Provider
        value={{ product, setProduct, cart, setCart, wishlist, setWishlist }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/product/:itemId" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </DataContext.Provider>
    </HashRouter>
  );
};

export default App;
