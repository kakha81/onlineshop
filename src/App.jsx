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
import TabulatorTest from "./pages/TabulatorTest";

export const DataContext = createContext();

const App = () => {
  // Global states
  const [product, setProduct] = useState(productsArray);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [activeFlag, setActiveFlag] = useState("GEO");
  const [click, setClick] = useState(false);
  const [searchField, setSearchField] = useState([]);

  //Load flag from localStorage on initial render
  useEffect(() => {
    const initialFlagMemo = localStorage.getItem("flagMemo");
    setActiveFlag(initialFlagMemo);
  }, []);

  //Update localStorage whenever flag changes
  useEffect(() => {
    localStorage.setItem("flagMemo", activeFlag);
  }, [activeFlag]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const initialCartMemo = JSON.parse(localStorage.getItem("cartMemo"));
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
          activeFlag,
          setActiveFlag,
          click,
          setClick,
          searchField,
          setSearchField,
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
          <Route path="/tabulatorTest" element={<TabulatorTest />} />
        </Routes>
      </DataContext.Provider>
    </HashRouter>
  );
};

export default App;
