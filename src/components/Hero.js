import React from "react";
import { restaurants } from "./data";
import "./Hero.css"; // Ensure you have the CSS for styling

const Hero = ({ addToCart }) => {
  return (
    <div className="hero">
      <h3>Available Restaurants</h3>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="restaurant">
          <h2>{restaurant.name}</h2>
          <img
            src={restaurant.image}
            alt={restaurant.name}
            style={{ height: "200px" }}
          />

          <div className="menu">
            {restaurant.menu.map((item) => (
              <div key={item.id} className="menu-item">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ height: "150px", width: "150px" }}
                />
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
