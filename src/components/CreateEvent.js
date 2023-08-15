import React, { useState } from "react";
import axios from "axios";

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
      <h1>Organize Event</h1>

      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <textarea
        placeholder="Event Description"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Event Location"
        value={eventLocation}
        onChange={(e) => setEventLocation(e.target.value)}
      />
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
      />

      <button onClick={handleCreateEvent}>Create Event</button>
    </div>
  );
}

export default CreateEvent;
