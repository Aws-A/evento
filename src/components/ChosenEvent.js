import "./ChosenEvent.css";
import EventDetails from "./JoinEventButton";
import { useState, useEffect } from 'react';
import axios from 'axios';
const ChosenEvent = ({event}) => {
 
  const [attendeesCount, setAttendeesCount] = useState(0);
  const [groupId, setGroupId] = useState(null);
  const [organizerId, setOrganizerId] = useState(null);
    console.log(event.eventid)

    useEffect(() => {
      axios.get(`http://localhost:8080/events/${event.eventid}/attendees/count`)
        .then(response => {
          setAttendeesCount(response.data.count);
        })
        .catch(error => {
          console.error(`Error fetching attendees count for event ${event.eventid}:`, error);
        });
    
        axios
        .get(`http://localhost:8080/events/${event.eventid}/organizer`)
        .then(response => {
          const { organizerId } = response.data;
          setOrganizerId(organizerId); 
          console.log (organizerId)
        })
        .catch(error => {
          console.log (event.eventid)
          console.error(`Error fetching organizerId for event ${event.eventid}:`, error);
          console.error('Response data:', error.response.data); // Log the response data for debugging
        });
    }, [event.eventid]);
    

    
  
  

  return (
    <> 
      <div class="content">
        <div class="eventContent">
          <div class="mainEvent">
            <div class="front">
              <img src="/images/beachVolleyball.jpg"/>
              <div class="byImg">
                <h1> {event.eventname} </h1>
                <p> <b> {event.eventdescription} </b> </p>
                {/* <p> <b> Levels: </b> Beginners, Intermediate, Advanced </p> */}
              </div>
            </div>
            <div class="info">
              <div class="left">
                <p><b> Location: {event.eventlocation} </b> </p>
                <p> <b>Date:</b> {event.eventdate} </p>
                <p> <b>Going:</b>{attendeesCount}</p>
                {/* <p> <b>Time:</b> 12 P.M </p> */}
              </div>
              <div class="right">
                <p> <b>Price:</b> Free </p>
                <EventDetails key={event.eventId} event={event}/>
                {/* <p> <b>Requirements: </b> Beach Suit </p> */}
              </div>
            </div>
          </div>
          <hr></hr>
          <div class="otherEvents">
            <div class="allEvents">
              <div class="newEvent">
                <h1> Coming Events </h1>
              </div>
              <div class="pastEvent">
                <h2> Past Events </h2>
              </div>
            </div>
            <p> Beach Volleyball (Public) </p>
            <div class="date"> Sunday 30/7/2023 </div>
            <p> Beach Volleyball (Public) </p>
            <div class="date"> Thursday 3/8/2023</div>
            <p> Beach Volleyball (Public) </p>
            <div class="date"> Friday 4/8/2023 </div>
          </div>
        </div>

        {organizerId && ( // Check if organizerId exists
          <div class="groupContent">
            <img src="/images/beachGroup.jpg"/>
            <h1>Toronto Volleyball Friends</h1>
            <p> We organize volleyball events in Toronto: <br/>
                Beach Volleyball <br/>
                Indoor Volleyball <br/>
                Grass Volleyball<br/>
            </p>
          </div>
        )}

      </div>
    </>
   
  )
}
export default ChosenEvent;





