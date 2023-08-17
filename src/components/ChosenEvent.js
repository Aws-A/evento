import "./ChosenEvent.css";
import EventDetails from "./JoinEventButton";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { updateImageSource } from "./ChangeImageSource.js";

function updateImageGroup(groupName) {
  if (groupName === "Tech Enthusiasts") {
    return "/images/techGr.jpg";
  } else if (groupName === "Hiking Club") {
    return "/images/hikingGr.jpg";
  } else if (groupName === "Art Community") {
    return "/images/artGr.jpg";
  } else if (groupName === "Coding Enthusiasts") {
    return "/images/codingGr.jpg";
  } else if (groupName === "Nature Lovers") {
    return "/images/natureGr.jpg";
  } else if (groupName === "Music Fans") {
    return "/images/musicGr.jpg";
  } else {
    return "/images/defaultGroup.jpg";
  }
}

const ChosenEvent = ({event}) => {
 
  const [attendeesCount, setAttendeesCount] = useState(0);
  const [groupId, setGroupId] = useState(null);
  const [organizerId, setOrganizerId] = useState(null);
  const [group, setGroup] = useState(null);
  const [groupName, setGroupName] = useState(null)
  const [groupDescription, setGroupDescription] =useState(null)
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
          console.log(organizerId);
  
          if (organizerId) {
            axios
              .get(`http://localhost:8080/groups/${organizerId}/details`)
              .then(groupResponse => {
                const groupName = groupResponse.data.groupname;
               const groupDescription = groupResponse.data.groupdescription;
 
                console.log (groupName)
                setGroup(groupResponse.data);
                setGroupName(groupName)
                setGroupDescription(groupDescription)
               
              })
              .catch(error => {
                console.error(`Error fetching group details for organizer ${organizerId}:`, error);
              });
          }
        })
        .catch(error => {
          console.log(event.eventid);
          console.error(`Error fetching organizerId for event ${event.eventid}:`, error);
          console.error('Response data:', error.response.data);
        });
    }, [event.eventid]);
    

    
  
  

  return (
    <> 
      <div class="content">
        <div class="eventContent">
          <div class="mainEvent">
            <div class="front">
              <img src={updateImageSource(event)} />
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

        {organizerId && group && (
  <div className="groupContent">
<<<<<<< HEAD
    <img src="/images/defaultGroup.jpg" alt="Group" />
=======
    <img src={updateImageGroup(groupName)} alt="Group" />
>>>>>>> b4987069091f565b75a6948e9a0050e7cc4a06e5
   
    <h1>{groupName}</h1>
    <p>{groupDescription}</p>

  </div>
)}

      </div>
    </>
   
  )
}
export default ChosenEvent;





