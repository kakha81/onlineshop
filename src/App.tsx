import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='ProductList' element={<ProductList />} />
        <Route path='Product' element={<Product />} />
        <Route path='Cart' element={<Cart />} />
        <Route path='Register' element={<Register />} />
        <Route path='Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
