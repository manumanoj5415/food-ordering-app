import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; // Ensure you have the CSS for styling

const Navbar = ({ cartItemsCount }) => {
  return (
    <div className="navbar-container">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/ContactUS">Contact</Link>
          </li>
          <li className="cart-icon">
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartItemsCount > 0 && (
                <span className="cart-count">{cartItemsCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
