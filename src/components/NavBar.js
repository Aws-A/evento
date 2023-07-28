import React from "react";
import "./navbar.css"
import { useState } from "react";

const NavBar = () => {

  const [currentPage, setCurrentPage] = useState(null); 
  //move this to one universal place later to avoid repeat
  //NavBar has to have a capital N otherwise useState crashes?

  const handleItemClick = (page) => {
    setCurrentPage(page);
    console.log(page)
  };

  return (
    <div className="navbarContainer">
    
      <h1 onClick={()=> handleItemClick("homePage")}>Home Page</h1>
      <h1 onClick={()=> handleItemClick("explore")}>Explore</h1>
      <h1 onClick={()=> handleItemClick("profile")}>My Profile</h1>
      <h1 onClick={()=> handleItemClick("contactUs")}>Contact Us</h1>

    </div>
  );
};

export default NavBar