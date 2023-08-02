import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import ListProduct from './component/ListProduct';
import OrderDetail from './component/OrderDetail';
// import ProductDeatil from './component/ProductDeatil';
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      {/* <Route path='/product/:productId' element={<ProductDeatil/>}></Route> */}
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/list-product' element={<ListProduct/>}></Route>
      <Route path='/oder-deatail' element={<OrderDetail/>}></Route>
    </Routes>
   
   </BrowserRouter>
  );
}

export default App;
