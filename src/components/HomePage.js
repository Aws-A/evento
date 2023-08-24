import React, { useState } from "react";
import EventsPage from "./EventsPage";
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
      <div className="animation">
        <img className="gif" src="/images/eventoWelcome.gif" />
      </div>
      <div className="purpose">
        <ul>We have chosen this project as achieving interests could reflects on :
          <li> - Achieving goals</li>
          <li> - Filling self-satisfication</li>
          <li> - Socializing with people who have same interests</li>
        </ul> 
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
      <hr className="topLine" />
      <div className="feedback">
        <p> "If you would like to give us a feedback about what do you like  about <br />
        this project and/or any suggestion to be added, please feel <br />
        free to reach us by emails, we'd appreciate it "</p>
      </div>
      <hr className="bottomLine" />

      {currentPage === "explore" && <EventsPage />}
      {currentPage === "groups" && <GroupsPage />}
      {currentPage === "communications" && <CommunicationsPage />}
    </>
  );
};


export default HomePage;
