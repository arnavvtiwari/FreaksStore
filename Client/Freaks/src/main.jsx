import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Products from './components/Inventory/Products.jsx'
import ProductsW from './components/Inventory/ProductsW.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import CartPage from './components/Cart/Cart.jsx'
import LoginPage from './components/Login/Login.jsx'
import ProductPage from './components/Inventory/ProductView.jsx'
import Register from './components/Register/Register.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='products' element={<Products/>}/>
    <Route path='productview' element={<ProductPage/>}/>
    <Route path='productsw' element={<ProductsW/>}/>
    <Route path='cart' element={<CartPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

