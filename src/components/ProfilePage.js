// ProfilePage.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated && user) {
    const { name, email } = user;
    console.log(user.data);

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
        <button class="btn">Upload Profile Picture</button>
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
            <textarea placeholder="Enter your phone number here" />
          </div>
          <div>
            <h1>Email</h1>
            <textarea placeholder="Enter your email here" value={user.email} readOnly />
          </div>
        </div>
        <button class="btn">Save Changes</button>
      </>
    );
  } else {
    return <p>Please log in to view your profile.</p>;
  }
};

export default ProfilePage;
