import "./ChosenGroup.css";
import {updateImageSrc} from "./ChangeImageSource.js";
import { updateImageSrcPhoto1 } from "./ChangeImageSource.js";
import { updateImageSrcPhoto2 } from "./ChangeImageSource.js";
import { updateImageSrcPhoto3 } from "./ChangeImageSource.js";
import { updateImageSrcPhoto4 } from "./ChangeImageSource.js";
import { updateImageSrcPhoto5 } from "./ChangeImageSource.js";
import { updateImageSrcPhoto6 } from "./ChangeImageSource.js";
import { updateImageSrcRightPhoto1 } from "./ChangeImageSource.js";
import { updateImageSrcRightPhoto2 } from "./ChangeImageSource.js";
import { updateRightText } from "./ChangeImageSource.js";

const ChosenGroup = ({selectedGroup}) => {
console.log ('Do selected Group',selectedGroup)

  return (
    <> 
      <div class="contentGr">

        <div class="groupContentGr">
          <div class="mainGroup">
            <div class="frontGr">
              <img src={updateImageSrc(selectedGroup)}/>
              <div class="byImgGr">
              <h1>{selectedGroup.groupname}</h1>
              <h2>{selectedGroup.groupdescription}</h2>
                {/* <p> {selectedGroup.groupdescription} </p>  */}
              </div>
            </div>
            <div class="infoGr">
              <div class="leftGr">
               
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
                <img className="photo1" src={updateImageSrcPhoto1(selectedGroup)}/>
                <img className="photo2" src={updateImageSrcPhoto2(selectedGroup)}/>
                <img  className="photo3" src={updateImageSrcPhoto3(selectedGroup)}/>
              </div>
              <div class="photos">
                <img className="photo4" src={updateImageSrcPhoto4(selectedGroup)}/>
                <img className="photo5" src={updateImageSrcPhoto5(selectedGroup)}/>
                <img className="photo6" src={updateImageSrcPhoto6(selectedGroup)}/>
              </div>
          </div>
        </div>
        <div class="eventsContentGr">
        <img className="rightPhoto1" src={updateImageSrcRightPhoto1(selectedGroup)}/>
          <h1 id="rightText1">{selectedGroup.groupname} (Private) </h1>
          <p> <b>Location:</b> Lupo Restaurant & Vinoteca 869 Hamilton St, Vancouver, BC V6B 2R7 <br/>
          <b>Date:</b> Friday, 5/8/2023 <br/>
          <b>Time:</b> 5:00 PM<br/>
          </p>
          <img  className="rightPhoto2" src={updateImageSrcRightPhoto2(selectedGroup)}/>
          <h1 id="rightText2">{selectedGroup.groupname} (Public) </h1>
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