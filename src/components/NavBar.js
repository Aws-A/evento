import React from "react";
import "./navbar.css";

const NavBar = ({ onNavChange }) => {

  const handleItemClick = (page) => {
    onNavChange(page);
  };

  return (
    <div className="navbarContainer">
      <h1 onClick={() => handleItemClick("homePage")}>Home Page</h1>
      <h1 onClick={() => handleItemClick("explore")}>Explore</h1>
      <h1 onClick={() => handleItemClick("profile")}>My Profile</h1>
      <h1 onClick={() => handleItemClick("contactUs")}>Contact Us</h1>
    </div>
  );
};

export default NavBar;
