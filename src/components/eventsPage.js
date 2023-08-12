import React, { useState, useEffect } from "react";
import axios from "axios";
import './EventsPage.css'


const EventsPage= (props) => {
  const [eventSearchQuery, setEventSearchQuery] = useState("");
  const [eventSearchResults, setEventSearchResults] = useState([]);


  const [events, setEvents] = useState([]);
  // const [chosenEvent, setChosenEvent] = useState(null)


  useEffect(() => {
  axios.get('http://localhost:8080/events')
  .then(console.log("TESTING EVENT PAGE"))
  .then(response => {
    // console.log(response.data)
    setEvents(response.data)
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


const handleEventClick = (selectedEvent) => {
  props.onHomeChange("chosenPage", selectedEvent)
};


  return (
    <>
    <div className="eventSearch">
      <h1>Search</h1>
      <div>
        {/* <h2>Events</h2> */}
        <input
          type="text"
          value={eventSearchQuery}
          onChange={(e) => setEventSearchQuery(e.target.value)}
          placeholder="Search events..."
        />
       
    
      </div>
      <div>
      
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
         




   
   <div onClick={() => props.onHomeChange("chosenPage")}> Aws Temporary Link </div>
   </>
  





  );
};

export default EventsPage;
