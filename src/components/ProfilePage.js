// ProfilePage.js
import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./ProfilePage.css";
import axios from "axios";

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();
  const [phoneNumber, setPhoneNumber] = useState(""); 
    const [email, setEmail] = useState(""); 


  if (isAuthenticated && user) {
   

    const handleSaveChanges = () => {
      axios
        .post("http://localhost:8080/update-profile", {
          // userId: user.userId,
          fullName: `${user.given_name} ${user.family_name}`,
          email,
          phoneNumber,
        })
        .then((response) => {
          console.log("Changes saved:", response.data);
        })
        .catch((error) => {
          console.error("Error saving changes:", error);
        });
    };
    

    return (
      <>
        <h1>Profile</h1>
        
        <div class="top">
        {user.picture && (
          <img
            src={user.picture}
            alt="Profile Picture"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            class="profileImg"
          />
        )}
        {/* <button class="btn">Upload Profile Picture</button> */}
        </div>
        <div className="ProfileEdits">
          <div>
            <h1>First Name</h1>
            <h2>{user?.given_name}</h2>
          </div>
          <div>
            <h1>Last Name</h1>
            <h2>{user?.family_name}</h2>
          </div>
          <div>
            <h1>Phone Number</h1>
            <textarea placeholder="Enter your phone number here" 
             value={phoneNumber}
             onChange={(e) => setPhoneNumber(e.target.value)}
             />
          </div>
          <div>
            <h1>Email</h1>
            <textarea placeholder="Enter your email here" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             />
          </div>
        </div>
        <button className="btn" onClick={handleSaveChanges}>
  Save Changes
</button>
      </>
    );
  } else {
    return <p>Please log in to view your profile.</p>;
  }
};

export default ProfilePage;
