    
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
