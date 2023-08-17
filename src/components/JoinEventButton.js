
import React from "react";
import axios from "axios";


const EventDetails = ({ event }) => {
 

  const handleJoinEvent = () => {
    const url = `http://localhost:8080/events/${event.eventid}/attendees`;
    console.log("Join event URL:", url); 

    const userId = 1; // Use a fixed user ID for testing n couldnt get it to work elsewise
    
    axios.post(url, { userId })
      .then(response => {
        console.log("Joined event:", response.data);
      })
      .catch(error => {
        console.error("Error joining event:", error);
      });
  };

  return (
    <div>
      <h1>{event.eventName}</h1>
      <p>{event.eventDescription}</p>
      <p>Date: {event.eventDate}</p>
      <p>Location: {event.eventLocation}</p>
      <button class="joinEvent" onClick={handleJoinEvent}>Join Event</button>
    </div>
  );
};

export default EventDetails;

