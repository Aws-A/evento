import React, { useState, useEffect } from "react";
import axios from "axios";
import './EventsPage.css';
import { updateImageSource } from "./ChangeImageSource.js";

const EventsPage= (props) => {
  const [eventSearchQuery, setEventSearchQuery] = useState("");
  const [eventSearchResults, setEventSearchResults] = useState([]);


  const [events, setEvents] = useState([]);
  // const [chosenEvent, setChosenEvent] = useState(null)

  const handleCreateEventClick = () => {
    props.onHomeChange("createEvent");
  };
  


  // useEffect(() => {
  //   axios.get('http://localhost:8080/events')
  //     .then(response => {
  //       setEvents(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching test data: couldnt get to events', error);
  //     });
  // }, []);


  useEffect(() => {
  axios.get('http://localhost:8080/events')
  .then(console.log("TESTING EVENT PAGE"))
  .then(response => {
    console.log('test data',response.data)
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
    <h1 class="pageTitle">Events</h1>
    <div className="eventSearch">
      <h1>Search</h1>
        {/* <h2>Events</h2> */}
        <input
          className="searchText"
          type="text"
          value={eventSearchQuery}
          onChange={(e) => setEventSearchQuery(e.target.value)}
          placeholder="Search events..."
        />
     <button className="createEventBtn eventsBtn" onClick={handleCreateEventClick}> 
            <p> Create Event </p> 
    </button>
    </div>


      <ul>
      {eventSearchResults.map((selectedEvent, index) => (
        <li
          key={index}
          className="event-box"
          onClick={() => handleEventClick(selectedEvent)}
        >
      <img id="eventImg" src={updateImageSource(selectedEvent)}/>
      <div className="contentInside textLeft">
      <strong>{selectedEvent.eventname}</strong>
      <p>{selectedEvent.eventdescription}</p>
      </div>
      <div className="contentInside textRight">
      <p>Location: {selectedEvent.eventlocation}</p>
      <p>Time: {selectedEvent.eventdate}</p>
      </div>
        </li>
      ))}
    </ul>
         
   </>
  );
};

export default EventsPage;
