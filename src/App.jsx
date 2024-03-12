import { createContext, useEffect, useState } from "react";
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
  // Global states
  const [product, setProduct] = useState(productsArray);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const initialCartMemo = JSON.parse(localStorage.getItem("cartMemo")) || [];
    setCart(initialCartMemo);
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cartMemo", JSON.stringify(cart));
  }, [cart]);

  //Load wishlist from localStorage on initial render
  useEffect(() => {
    const initialWishlistMemo =
      JSON.parse(localStorage.getItem("wishlistMemo")) || [];
    setWishlist(initialWishlistMemo);
  }, []);

  //Update localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("wishlistMemo", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <HashRouter>
      <DataContext.Provider
        value={{
          product,
          setProduct,
          cart,
          setCart,
          wishlist,
          setWishlist,
        }}
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
