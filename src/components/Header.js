import React from "react";
import "./HomePage.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Header = () => {

  return (
    <div className="header">
  <h1> Evento</h1>
  <div class="logBtns">
    <LoginButton />
    <LogoutButton />
    </div>
  </div>
  );
};

export default Header