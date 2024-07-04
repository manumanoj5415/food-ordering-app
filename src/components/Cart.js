import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems }) => {
  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart" style={{ marginLeft: "100px", marginTop: "50px" }}>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100px",
                height: "100px",
                marginRight: "100px",
              }}
            />
            {item.name} ₹{item.price.toFixed(2)}
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
