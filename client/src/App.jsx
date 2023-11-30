import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.scss"
import React from "react";
import Cashback from "./components/cashback/Cashback.jsx";


const Layout = () =>{
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products/:id",
        element: <Products/>
      },
      {
        path: "/product/:id",
        element: <Product/>
      },
      {
        path: "/transfer",
        element: <Product/>
        //TODO alterar para component transfer
      },
      {
        path: "/cashback",
        element: <Cashback/>
      }
    ]
  },
]);


function App() {

  return <RouterProvider router={router} />;
}

export default App;
