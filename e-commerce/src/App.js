import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from "./features/pages/Home"
import LoginPage from './features/pages/LoginPage';
import SignupPage from './features/pages/SignupPage';
import CartPage from './features/pages/CartPage';
import CheckoutPage from './features/pages/CheckoutPage';
import ProductDetailsPage from './features/pages/ProductDetailsPage';
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
  { path: "/product-details", element: (<ProductDetailsPage></ProductDetailsPage>)},
]);


function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
