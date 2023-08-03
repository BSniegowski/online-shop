import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import './App.css';
import {HomePage} from "./components/HomePage.tsx";
import {ProductPage} from "./components/ProductPage.tsx";
import {CartPage} from "./components/CartPage.tsx";
import {DeliveryAndPaymentMethod} from "./components/DeliveryAndPaymentMethod.tsx";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/stock/:productName" element={<ProductPage/>}/>
        <Route exact path="/cart" element={<CartPage/>}/>
        <Route exact path="/deliveryAndPaymentMethod" element={<DeliveryAndPaymentMethod/>}/>
      </Routes>
    </BrowserRouter>
  );
}

