import React, { useState } from "react";
import axios from "axios";
import "./create.css";

const CreateGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");

  // const [organizerId, setOrganizerId] = useState("");

  const handleCreateGroup = () => {
    const newGroup = {
      groupName: groupName,
      groupDescription: groupDescription,
    };
  
    axios.post("http://localhost:8080/createGroups", newGroup)
      .then(response => {
        console.log("Group created:", response.data);
      })
      .catch(error => {
        if (error.response) {
          console.error("Error creating group:", error.response.data);
        } else {
          console.error("Error creating group:", error.message);
        }
      });
  };
  


  return (
    <div>
      <h1 className="titlePage">Organize Group</h1>
      <div className="creaeSection">
      <input
        className="organize"
        type="text"
        placeholder="Group Name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      <textarea
        className="organizeText"
        placeholder="Group Description"
        value={groupDescription}
        onChange={(e) => setGroupDescription(e.target.value)}
      />
   

      <button className="createBtn" onClick={handleCreateGroup}>Create Group</button>
      </div>
    </div>
  );
}

export default CreateGroup;
