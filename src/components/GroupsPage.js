import React, { useState } from "react";
import "./groups.css"

const GroupsPage = (props) => {

  return (
    <> 
      <h1 class="title"> Groups</h1>
      <div class="eventB">
        <div> </div>
        <div> </div>
      </div>
      <div onClick={() => props.onHomeChange("chosenPageGr")}> Aws Temporary Link </div>
    </>
   
  )
}
export default GroupsPage
