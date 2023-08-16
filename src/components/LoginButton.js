import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const LoginButton = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const [nameExists, setNameExists] = useState(false); 

  useEffect(() => {
    if (isAuthenticated && user) {
      const { given_name, family_name } = user;

      axios.get(`http://localhost:8080/user/names`)
        .then(response => {
          const names = response.data.map(nameObj => nameObj.fullname);
          console.log("Backend response:", names);
         
          console.log("Given Name:", given_name);
          console.log("Family Name:", family_name);
          const fullName = `${given_name} ${family_name}`;
          const exists = names.includes(fullName) || names.includes(user.name);
  
          setNameExists(exists); // Update the state with the result
          console.log (exists )

          if (exists) {
            console.log("User's name already exists and is in the DB", user);
          } else {
            console.log("User's name does not exist, creating new user");
            const placeholderEmail = `${given_name}.${family_name}@hotmail.com`;
            axios.post(`http://localhost:8080/user/users`, {
              firstName: given_name,
              lastName: family_name,
              email: placeholderEmail,
              password: "password"
            })
            .then(response => {
              console.log("User added:", response.data);
            })
            .catch(error => {
              console.error("Error adding user:", error);
            });
          }
        })
        .catch(error => {
          console.error("Error checking user's name:", error);
        });
    }
  }, [isAuthenticated, user, nameExists]);


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
