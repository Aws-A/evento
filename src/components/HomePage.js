import React, { useState } from "react";
import EventsPage from "./EventsPage"; // Import your EventsPage component
import GroupsPage from "./GroupsPage"; // Import your GroupsPage component
import CommunicationsPage from "./CommunicationsPage"; // Import your CommunicationsPage component
import "./HomePage.css"

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handleItemClick = (page) => {
    setCurrentPage(page);
    // console.log(page)
  };

  

  return (
    <>
      <h1>Home Page</h1>
      <h1>Explore</h1>
      <div className="eventPageCategory">
          <div className ="eventsButton">
        <img
          src="/images/placeholder.png"
          alt="Events"
          onClick={() => handleItemClick("events")}
        /> 
        <h1>
          Events
        </h1>
        </div>
        <div className="groupsButton">
        <img
           src="/images/placeholder.png"
          alt="Groups"
          onClick={() => handleItemClick("groups")}
        />
        <h1>Groups</h1>
        </div>

        <div className="communicationButton">
        <img
            src="/images/placeholder.png"
          alt="Communications"
          onClick={() => handleItemClick("communications")}
        />
        <h1>Communications</h1>
        </div>
      </div>
  

      {currentPage === "events" && <EventsPage />}
      {currentPage === "groups" && <GroupsPage />}
      {currentPage === "communications" && <CommunicationsPage />}
    </>
  );
};

export default HomePage;
