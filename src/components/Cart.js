import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = ({ cartItems }) => {
  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <p>{item.name}</p>
              <p>₹{item.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
      <p>Total Amount: ₹{getTotalAmount()}</p>
      <Link to="/order-tracking">
        <button>Confirm Order</button>
      </Link>
    </div>
  );
};

export default Cart;
