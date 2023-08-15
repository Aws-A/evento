import "./ChosenGroup.css";

const ChosenGroup = () => {

  return (
    <> 
      <div class="contentGr">
        <div class="groupContentGr">
          <div class="mainGroup">
            <div class="frontGr">
              <img src="/images/dineGroup.jpg"/>
              <div class="byImgGr">
                <h1> Vancouver Let’s Go </h1>
                <p> Our Group is to meet with other people and hang out in restaurants, cinemas, and theatres </p>
              </div>
            </div>
            <div class="infoGr">
              <div class="leftGr">
                <p><b>Number of Members:</b> 361 </p>
                <p> <b>Year Created:</b> 2020 </p>
              </div>
              <div class="rightGr">
                <p> </p>
                <p>  </p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div class="photosSection">
            <h1> Photos </h1>
              <div class="photos">
                <img src="/images/memo1.jpg"/>
                <img src="/images/memo2.jpg"/>
                <img src="/images/memo3.jpg"/>
              </div>
              <div class="photos">
                <img src="/images/memo4.jpg"/>
                <img src="/images/memo5.jpg"/>
                <img src="/images/memo6.jpg"/>
              </div>
          </div>
        </div>
        <div class="eventsContentGr">
        <img src="/images/dineEvent1.jpg"/>
          <h1>Dinning Out (Private) </h1>
          <p> <b>Location:</b> Lupo Restaurant & Vinoteca 869 Hamilton St, Vancouver, BC V6B 2R7 <br/>
          <b>Date:</b> Friday, 5/8/2023 <br/>
          <b>Time:</b> 5:00 PM<br/>
          </p>
          <img src="/images/dineEvent2.jpg"/>
          <h1>Asian Food </h1>
          <p> <b>Location:</b> 1132 E Hastings St, Vancouver, BC V6A 1S2 <br/>
          <b>Date:</b> Sunday, 7/8/2023<br/>
          <b>Time:</b> 3:00 PM<br/>
          </p>
        </div>
      </div>
    </>
   
  )
}
export default ChosenGroup;