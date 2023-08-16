import React, { useState, useEffect } from "react";
import axios from "axios";
import './EventsPage.css'

const EventsPage = (props) => {
  const [eventSearchQuery, setEventSearchQuery] = useState("");
  const [eventSearchResults, setEventSearchResults] = useState([]);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  // console.log (props)

  const handleCreateEventClick = () => {
    setShowCreateEvent(true);
    console.log ("TESTING CREATE EVENT")
    // setSelectedEvent(null)
    props.onHomeChange("createEvent"); // Set currentPage to 'createEvent'
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
    const filteredEvents = events.filter(event =>
      event.eventname.toLowerCase().includes(eventSearchQuery.toLowerCase()) ||
      event.eventlocation.toLowerCase().includes(eventSearchQuery.toLowerCase()) ||
      event.eventdescription.toLowerCase().includes(eventSearchQuery.toLowerCase())
    );
    
    setEventSearchResults(filteredEvents);
  }, [eventSearchQuery, events]);



  // useEffect(() => {
  //   const fetchAttendeesCounts = async () => {
  //     const eventPromises = eventSearchResults.map(event => {
  //       return axios.get(`http://localhost:8080/events/${event.eventid}/attendees/count`)
  //         .then(response => {
  //           const attendeesCount = response.data.count;
  //           return { ...event, attendeesCount };
  //         })
  //         .catch(error => {
  //           console.error(`Error fetching attendees count for event ${event.eventid}:`, error);
  //           return event; // Return the event with original data if there's an error
  //         });
  //     });

  //     try {
  //       const updatedEvents = await Promise.all(eventPromises);
  //       setEventSearchResults(updatedEvents);
  //     } catch (error) {
  //       // Handle error if needed
  //     }
  //   };

  //   fetchAttendeesCounts();
  // }, [eventSearchResults]);




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
