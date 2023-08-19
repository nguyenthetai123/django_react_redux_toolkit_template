import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
   <BrowserRouter>
    <Routes>
    /
    <Route path='/' element={<Home/>}></Route>
     <Route path='/user/'>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
     </Route>
    </Routes>
    <ToastContainer />
   </BrowserRouter>
  );
}

export default App;
