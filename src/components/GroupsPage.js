
import "./groups.css"
import axios from "axios";
import React, { useState, useEffect } from "react";
import './EventsPage.css';

function updateImageSrc(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/techGr.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/hikingGr.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/artGr.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/codingGr.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/natureGr.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/musicGr.jpg";
  } else {
    return "/images/beachVolleyball.jpg"
  }
}


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
    props.onHomeChange("chosenPageGr", selectedGroup);
  };

  return (
    <>
      <div className="eventSearch">
    
        <h1>Search</h1>
        <div>
          <input
            type="text"
            value={groupSearchQuery}
            onChange={(e) => setGroupSearchQuery(e.target.value)}
            placeholder="Search groups..."
          />
        </div>
        <div></div>
      </div>

       <button className="createEventBtn" onClick={handleCreateGroupClick}> 
            Create Group
          </button>

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
