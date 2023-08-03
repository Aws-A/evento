import React, { useState } from "react";

const EventsPage= () => {
  const [eventSearchQuery, setEventSearchQuery] = useState("");
  const [eventSearchResults, setEventSearchResults] = useState([]);

  const [groupSearchQuery, setGroupSearchQuery] = useState("");
  const [groupSearchResults, setGroupSearchResults] = useState([]);

  const [interestSearchQuery, setInterestSearchQuery] = useState("");
  const [interestSearchResults, setInterestSearchResults] = useState([]);

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
     Events (somehow use li key for each event thought this involves using db)
   </ul>
   </>
  





  );
};

export default EventsPage;
