import "./ChosenEvent.css";

const ChosenEvent = () => {

  return (
    <> 
      <div class="content">
        <div class="eventContent">
          <div class="mainEvent">
            <div class="front">
              <img src="/images/beachVolleyball.jpg"/>
              <div class="byImg">
                <h1> Beach Volleyball (Public) </h1>
                <p> Join us in fun games </p>
                <p> Levels: Beginners, Intermediate, Advanced </p>
              </div>
            </div>
            <div class="info">
              <div class="left">
                <p>Location: Woodbine Beach, Ashbridges Bay </p>
                <p> Time: Saturday, 29/7/2023 </p>
              </div>
              <div class="right">
                <p> Price: Free </p>
                <p> Requirements: Beach Suit </p>
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
        <div class="groupContent">
        <img src="/images/beachGroup.jpg"/>
          <h1>Toronto Volleyball Friends </h1>
          <p> We organize volleyball events in Toronto: <br/>
              Beach Volleyball <br/>
              Indoor Volleyball <br/>
              Grass Volleyball<br/>
              <br/>
              Number of Members:  752 <br/>
              <br/>
              Created : 2017
          </p>
        </div>
      </div>
    </>
   
  )
}
export default ChosenEvent;