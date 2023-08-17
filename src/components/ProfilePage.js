import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./ProfilePage.css";
import axios from "axios";

const ProfilePage = (props) => {
  const { user, isAuthenticated } = useAuth0();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleCreateEventClick = () => {
    props.onHomeChange("createEvent");
  };

  if (isAuthenticated && user) {
    const handleSaveChanges = () => {
      axios
        .post("http://localhost:8080/update-profile", {
          // userId: user.userId,
          fullName: `${user.given_name} ${user.family_name}`,
          email,
          phoneNumber,
          username,
          password,
          firstName,
          lastName,
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

        <div className="profile-container">
          <div className="left-column">
            {user.picture && (
              <img
                src={user.picture}
                alt="Profile Picture"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
                className="profileImg"
              />
            )}
            <h2>
              {user?.given_name} {user?.family_name}
            </h2>
          </div>
          <div className="right-column">
            <button
              className="createEventBtn"
              onClick={handleCreateEventClick}
            >
              Create Event
            </button>
          </div>
        </div>

        <div className="ProfileEdits">
          <div className="column">
            <h1>Email</h1>
            <textarea
              placeholder="Enter your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h1>Username</h1>
            <textarea
              placeholder="Enter your username here"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <h1>Password</h1>
            <textarea
              placeholder="Enter your password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="column">
            <h1>First Name</h1>
            <textarea
              placeholder="Enter your first name here"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <h1>Last Name</h1>
            <textarea
              placeholder="Enter your last name here"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <h1>Phone Number</h1>
            <textarea
              placeholder="Enter your phone number here"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="SaveChangesContainer">
          <button className="btn SaveChangesBtn" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </div>
      </>
    );
  } else {
    return <p>Please log in to view your profile.</p>;
  }
};

export default ProfilePage;
