import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import OrderTracking from "./components/OrderTracking";
import ContactUS from "./components/ContactUS"; // Corrected the component name
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <div className="app">
        <Navbar cartItemsCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<Hero addToCart={addToCart} />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/ContactUS" element={<ContactUS />} />
          <Route path="/About" element={<About />} />

          {/* Updated the component usage */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
