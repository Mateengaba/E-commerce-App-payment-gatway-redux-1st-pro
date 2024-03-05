import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";
import Home from './pages/home/Home';
import Cart from './pages/Cart/Cart';
import Nopage from './pages/nopage/Nopage';
import Order from './pages/Order/Order'
import Dashboard from './pages/admin/dashboard/Dashboard'
import MyState from './context/data/myState';
import Signup from './pages/registration/Signup';
import Login from './pages/registration/Login';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import AddProduct from './pages/admin/pages/AddProduct';
import UpdateProduct from './pages/admin/pages/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/AllProducts';

function App() {
  return (
    <MyState>

      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />

          <Route path="/order" element={
          <ProtectedRoutes>
          <Order />
          </ProtectedRoutes>} />
          <Route path="/cart" element={<Cart />} />
         
          <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin>
              <Dashboard />
            </ProtectedRoutesForAdmin>
          } />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
         
          <Route path="/AddProduct" element={
            <ProtectedRoutesForAdmin>
              <AddProduct />
            </ProtectedRoutesForAdmin>
          } />
        
          <Route path="/UpdateProduct" element={
            <ProtectedRoutesForAdmin>
              <UpdateProduct />
            </ProtectedRoutesForAdmin>
          } />

          <Route path="/nopage" element={<Nopage />} />



        </Routes>
        <ToastContainer/>

      </Router>

    </MyState>




  );
}

export default App;


// user routs

const ProtectedRoutes = ({children}) =>{
const user = localStorage.getItem('user')

if(user){
  return children
}else{
  return <Navigate to={'/Login'} />
}

}


// admin routs

const ProtectedRoutesForAdmin = ({children}) =>{
const admin = JSON.parse(localStorage.getItem('user'))

if(admin.user.email === 'admin@gmail.com'){
  return children

}
else{
  return <Navigate to={'/Login'} />
}

}