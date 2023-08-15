
import "./groups.css"
import axios from "axios";
import React, { useState, useEffect } from "react";
import './EventsPage.css'


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
      group.groupname.toLowerCase().includes(groupSearchQuery.toLowerCase()) ||
      group.groupdescription.toLowerCase().includes(groupSearchQuery.toLowerCase())
    );
    setGroupSearchResults(filteredGroups);
  }, [groupSearchQuery, groups]);

  const handleGroupClick = (selectedGroup) => {
    props.onHomeChange("chosenPage", selectedGroup);
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
            <strong>{selectedGroup.groupname}</strong>
            <p>{selectedGroup.groupdescription}</p>
  
          </li>
        ))}
      </ul>

      <div onClick={() => props.onHomeChange("chosenPage")}>Aws Temporary Link</div>
    </>
  );
};

export default GroupsPage;
