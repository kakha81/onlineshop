import { createContext, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { productsArray } from './data';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Profile from './pages/Profile';

export const DataContext = createContext();

const App = () => {
  const [product, setProduct] = useState(productsArray);
  const [cart, setCart] = useState([]);

  return (
    <HashRouter>
      <DataContext.Provider value={{ product, setProduct, cart, setCart }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/product/:itemId' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </DataContext.Provider>
    </HashRouter>
  );
};

export default App;
