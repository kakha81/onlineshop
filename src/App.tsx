import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/ProductList' element={<ProductList />} />
      <Route path='/Product' element={<Product />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path='/Register' element={<Register />} />
    </Routes>
  );
};

export default App;
