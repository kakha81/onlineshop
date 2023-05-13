import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/productlist' element={<ProductList />} />
      <Route path='/product' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
};

export default App;
