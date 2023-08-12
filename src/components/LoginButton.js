import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

//also deals with login functionality
const LoginButton = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      const { name, email, nickname } = user;

      axios.get(`http://localhost:8080/user/names`)
        .then(response => {
          const names =response.data
          console.log("Backend response:", names);

          if (names.includes(name)) {
            // User's name already exists in the database
            console.log("User's name already exists");
          } else {
            // User's name does not exist in the database
            console.log("User's name does not exist");
          }
        })
        .catch(error => {
          console.error("Error checking user's name:", error);
        });
      }
  }, [isAuthenticated, user]);

  const handleLogin = () => {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: window.location.origin,
      }
    });
  };

  return (
    <button onClick={handleLogin} className="log">
      Log In
    </button>
  );
};

export default LoginButton;
