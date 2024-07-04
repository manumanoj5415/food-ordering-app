import React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
const Menu = ({ addToCart }) => {
  const menuItems = [
    {
      id: 1,
      name: "Pizza",
      price: 250,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhKwrM72HEptEbC7QVgRFgjWqDArLKSdYSA&s",
    },
    {
      id: 2,
      name: "Burger",
      price: 100,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRT3F8R5AtpBbWe8mCgPlKIknWHQyFCj7myA&s",
    },
    {
      id: 3,
      name: "Fresh Fries",
      price: 55,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwABqay1xzqUMMtesTe8WAesrw7emXVVUIQ&s",
    },
    {
      id: 4,
      name: "Masal dosa",
      price: 90,
      image:
        "https://i.pinimg.com/736x/2a/c1/51/2ac15169850a766390adcba3a6d28eef.jpg",
    },
    {
      id: 5,
      name: "idali",
      price: 80,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJb9rOuAKWI59gLR3qQtuwmRvh1YlbXWDkg&s",
    },
    {
      id: 6,
      name: "Gobi",
      price: 200,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8EClsCpNsSMdhfm6OqzABid0ES0wv6qkiw&s",
    },
    // Add more items as needed
  ];

  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    addToCart(item);
    navigate("/cart"); // Navigate to the cart page
  };

  return (
    <div className="menu">
      {menuItems.map((item) => (
        <div className="menu-item" key={item.id}>
          <img src={item.image} alt={item.name} className="menu-item-image" />
          <div className="menu-item-details">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
