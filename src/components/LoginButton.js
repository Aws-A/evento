import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const LoginButton = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const [nameExists, setNameExists] = useState(false); // New state to track name existence

  useEffect(() => {
    const checkNameExists = async () => {
      if (isAuthenticated && user) {
        const { given_name, family_name } = user;

        try {
          const response = await axios.get(`http://localhost:8080/user/names`);
          const names = response.data;

          const exists = names.some(n => n === `${given_name} ${family_name}`);
          setNameExists(exists); // Update the state with the result

          if (!exists) {
            console.log("User's name does not exist, creating new user");
            const placeholderEmail = `${given_name}.${family_name}@hotmail.com`;
            const addUserResponse = await axios.post(`http://localhost:8080/user/users`, {
              firstName: given_name,
              lastName: family_name,
              email: placeholderEmail,
              password: "password"
            });
            console.log("User added:", addUserResponse.data);
          } else {
            console.log("User's name already exists and is in the DB");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    checkNameExists();
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
