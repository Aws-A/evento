import React, { useState } from "react";
import EventsPage from "./eventsPage";
import GroupsPage from "./GroupsPage"; 
import CommunicationsPage from "./CommunicationsPage"; 
import "./HomePage.css";

const HomePage = ({onHomeChange}) => {
  const [currentPage, setCurrentPage] = useState(null);

  

  

  return (
    <>
      {/* <h1>Home Page</h1> */}
      <div class="hero">
        <div class="para">
          <h1> Event up with us </h1>
          <p>
          Platform for people with mutual interests to: <br/>
          - Create and join groups <br/>
          - Organize and attend events <br/>
          - Communicate with each other
          </p>
        </div>
        <img src="/images/heroImg.jpg"/>
      </div>
      <h1 class="title">Explore</h1>
      <div className="eventPageCategory">
          <div className ="card eventsButton">
        <img
          src="/images/eventImg.jpg"
          alt="Events"
          onClick={() => onHomeChange("explore")}
        /> 
        <h1>
          Events
        </h1>
        </div>
        <div className="card">
          <img
           src="/images/groupImg.jpg"
          alt="Groups"
          onClick={() => onHomeChange("groups")}
          />
          <h1>Groups</h1>
        </div>

        <div className="card communicationButton">
          <img
            src="/images/communicateImg.jpg"
          alt="Communications"
          onClick={() => onHomeChange("communications")}
          />
          <h1>Communications</h1>
        </div>
      </div>
  

      {currentPage === "explore" && <EventsPage />}
      {currentPage === "groups" && <GroupsPage />}
      {currentPage === "communications" && <CommunicationsPage />}
    </>
  );
};

export default HomePage;
