import React, { useState } from "react";
import axios from "axios";
import "./create.css";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [organizerId, setOrganizerId] = useState("");

  const handleCreateEvent = () => {
    const newEvent = {
      eventName,
      eventDescription,
      eventLocation,
      eventDate,
      // organizerId,
    };

    axios.post("http://localhost:8080/createEvents", newEvent)
    .then(response => {
      console.log("Event created:", response.data);
    })
    .catch(error => {
      if (error.response) {
        console.error("Error creating event:", error.response.data);
      } else {
        console.error("Error creating event:", error.message);
      }
    });
  
};


  return (
    <div>
      <h1 className="pageTitle">Organize Event</h1>
      <div className="createSection">
      <img className="createImgs createGroup" src="/images/organizeEvent.svg"/>
      <input
        className="organize"
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        className="organizeText"
        placeholder="Event Description"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
      />
      <input
        className="organize"
        type="text"
        placeholder="Event Location"
        value={eventLocation}
        onChange={(e) => setEventLocation(e.target.value)}
      />
      <input
        className="organize"
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
      />

      <button className="createBtn" onClick={handleCreateEvent}>Create Event</button>
      </div>
    </div>
  );
}

export default CreateEvent;
