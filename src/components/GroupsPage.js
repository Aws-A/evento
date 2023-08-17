import "./GroupsPage.css"
import axios from "axios";
import React, { useState, useEffect } from "react";
import './EventsPage.css';
import {updateImageSrc} from "./ChangeImageSource.js";



const GroupsPage = (props) => {
  const [groupSearchQuery, setGroupSearchQuery] = useState("");
  const [groupSearchResults, setGroupSearchResults] = useState([]);
  const [groups, setGroups] = useState([]);
  const [showCreateGroup, setShowCreateGroup] = useState(false);

  const handleCreateGroupClick = () => {
    setShowCreateGroup(true);
    console.log ("TESTING CREATE Group")

    props.onHomeChange("createGroup"); // Set currentPage to 'createEvent'
  };


  useEffect(() => {
    axios.get('http://localhost:8080/groups')
      .then(response => {
        setGroups(response.data);
      })
      .catch(error => {
        console.error('Error fetching groups data:', error);
      });
  }, []);

  useEffect(() => {
    const filteredGroups = groups.filter(group =>
      group.groupname && group.groupname.toLowerCase().includes(groupSearchQuery.toLowerCase()) ||
      group.groupdescription && group.groupdescription.toLowerCase().includes(groupSearchQuery.toLowerCase())
    );
    setGroupSearchResults(filteredGroups);
  }, [groupSearchQuery, groups]);

  const handleGroupClick = (selectedGroup) => {
    props.onHomeChange("chosenPageGr", null, selectedGroup);
  };

  return (
    <>
    <h1 class="titlePage">Groups</h1>
      <div className="eventSearch">
    
        <h1>Search</h1>
          <input
            type="text"
            value={groupSearchQuery}
            onChange={(e) => setGroupSearchQuery(e.target.value)}
            placeholder="Search groups..."
          />
        <button className="createEventBtn groupsBtn" onClick={handleCreateGroupClick}> 
            <p> Create Group </p>
          </button>

      </div>

      <ul>
        {groupSearchResults.map((selectedGroup, index) => (
          <li
            key={index}
            className="event-box"
            onClick={() => handleGroupClick(selectedGroup)}
          >
            <img id="groupImg" src={updateImageSrc(selectedGroup)}/>
            <div className="contentInside">
              <strong className="groupsTitle">{selectedGroup.groupname}</strong>
              <p>{selectedGroup.groupdescription}</p>
            </div>
          </li>
        ))}
      </ul>

    </>
  );
};

export default GroupsPage;
