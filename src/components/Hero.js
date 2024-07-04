import React from "react";
import { restaurants } from "./data";
import "./Hero.css";

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
            className="restaurant-image"
          />

          <div className="menu">
            {restaurant.menu.map((item) => (
              <div key={item.id} className="menu-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-item-image"
                />
                <div className="menu-item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
