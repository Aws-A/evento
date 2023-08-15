import React, { useState, useEffect } from "react";
import axios from "axios";
import './EventsPage.css'

const EventsPage = (props) => {
  const [eventSearchQuery, setEventSearchQuery] = useState("");
  const [eventSearchResults, setEventSearchResults] = useState([]);
  const [showCreateEvent, setShowCreateEvent] = useState(false);

  const handleCreateEventClick = () => {
    setShowCreateEvent(true);
    props.onHomeChange("chosenPage", "createEvent"); // Set currentPage to 'createEvent'
  };

  const handleEventClick = (selectedEvent) => {
    props.onHomeChange("chosenPage", selectedEvent);
  };
  
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching test data: couldnt get to events', error);
      });
  }, []);

  useEffect(() => {
    // Filter events based on search query
    const filteredEvents = events.filter(event =>
      event.eventname.toLowerCase().includes(eventSearchQuery.toLowerCase()) ||
      event.eventlocation.toLowerCase().includes(eventSearchQuery.toLowerCase()) ||
      event.eventdescription.toLowerCase().includes(eventSearchQuery.toLowerCase())
    );
    setEventSearchResults(filteredEvents);
  }, [eventSearchQuery, events]);

  return (
    <>
      <div className="eventSearch">
        <h1>Search</h1>
        <div>
          <input
            type="text"
            value={eventSearchQuery}
            onChange={(e) => setEventSearchQuery(e.target.value)}
            placeholder="Search events..."
          />
        </div>
        <div>
          <button className="createEventBtn" onClick={handleCreateEventClick}> 
            Create Event 
          </button>
        </div>
      </div>

      <ul>
        {eventSearchResults.map((selectedEvent, index) => (
          <li
            key={index}
            className="event-box"
            onClick={() => handleEventClick(selectedEvent)}
          >
            <strong>{selectedEvent.eventname}</strong>
            <p>{selectedEvent.eventdescription}</p>
            <p>{selectedEvent.eventlocation}</p>
            <p>{selectedEvent.eventdate}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
