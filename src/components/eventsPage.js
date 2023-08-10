import React, { useState, useEffect } from "react";
import axios from "axios";
import './EventsPage.css'


const EventsPage= (props) => {
  const [eventSearchQuery, setEventSearchQuery] = useState("");
  const [eventSearchResults, setEventSearchResults] = useState([]);

  const [groupSearchQuery, setGroupSearchQuery] = useState("");
  const [groupSearchResults, setGroupSearchResults] = useState([]);

  const [interestSearchQuery, setInterestSearchQuery] = useState("");
  const [interestSearchResults, setInterestSearchResults] = useState([]);

  const [events, setEvents] = useState([]);


  useEffect(() => {
  axios.get('http://localhost:8080/events')
  .then(console.log("TESTING EVENT PAGE"))
  .then(response => {
    console.log(response.data)
    setEvents(response.data)
  })
  .catch(error => {
    console.error('Error fetching test data: couldnt get to events', error);
  });
}, []);


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
        {/* Display event search results */}
        <ul>
          {eventSearchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      </div>
      <div>
        {/* <h2>Groups</h2> */}
        <input
          type="text"
          value={groupSearchQuery}
          onChange={(e) => setGroupSearchQuery(e.target.value)}
          placeholder="Search groups..."
        />
        {/* Display group search results */}
        <ul>
          {groupSearchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      </div>
      <div>
        {/* <h2>Interests</h2> */}
        <input
          type="text"
          value={interestSearchQuery}
          onChange={(e) => setInterestSearchQuery(e.target.value)}
          placeholder="Search interests..."
        />
        {/* Display interest search results */}
        <ul>
          {interestSearchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      </div>
    </div>

    
    <ul>
        {events.map((event, index) => (
          <li key={index} className="event-box">
            {/* <strong>Event {index + 1}</strong> */}
            <ul>
              {Object.entries(event).map(([key, value]) => (
                key !== 'eventid' && key !== 'organizerid' && (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                )
              ))}
            </ul>
          </li>
        ))}
      </ul>
         




   
   <div onClick={() => props.onHomeChange("chosenPage")}> Aws Temporary Link </div>
   </>
  





  );
};

export default EventsPage;
