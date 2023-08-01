import React, { useState } from "react";
import EventsPage from "./EventsPage"; // Import your EventsPage component
import GroupsPage from "./GroupsPage"; // Import your GroupsPage component
import CommunicationsPage from "./CommunicationsPage"; // Import your CommunicationsPage component
import "./HomePage.css"

const HomePage = ({onHomeChange}) => {
  const [currentPage, setCurrentPage] = useState(null);

  

  

  return (
    <>
      {/* <h1>Home Page</h1> */}
      <h1>Explore</h1>
      <div className="eventPageCategory">
          <div className ="card eventsButton">
        <img
          src="/images/placeholder.png"
          alt="Events"
          onClick={() => onHomeChange("explore")}
        /> 
        <h1>
          Events
        </h1>
        </div>
        <div className="card groupsButton">
        <img
           src="/images/placeholder.png"
          alt="Groups"
          onClick={() => onHomeChange("groups")}
        />
        <h1>Groups</h1>
        </div>

        <div className="card communicationButton">
        <img
            src="/images/placeholder.png"
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
