import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetails from './features/Product-list/components/ProductDetails';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,}
  from "react-router-dom"
const router = createBrowserRouter([
  {path: "/", element: ( <Home></Home>),},
  {path: "/signup",element: (<SignupPage></SignupPage>) },
  { path: "/login", element: (<LoginPage></LoginPage>)},
  { path: "/cart", element: (<CartPage></CartPage>)},
  { path: "/checkout", element: (<CheckoutPage></CheckoutPage>)},
  { path: "/product-details", element: (<ProductDetails></ProductDetails>)},
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
