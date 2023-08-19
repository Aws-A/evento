import React, { useState, useEffect } from "react";
import axios from "axios";

export function updateImageSource(selectedEvent) {
  if (selectedEvent.eventname === "Art Exhibition") {
    return "/images/artEx.jpg";
  } else if (selectedEvent.eventname === "Coding Workshop") {
    return "/images/coding.jpg";
  } else if (selectedEvent.eventname === "Hiking Adventure") {
    return "/images/hiking.jpg";
  } else if (selectedEvent.eventname === "Live Music Night") {
    return "/images/liveMusic.jpg";
  } else if (selectedEvent.eventname === "Nature Walk") {
    return "/images/walk.jpg";
  } else if (selectedEvent.eventname === "Tech Conference") {
    return "/images/tech.jpg";
  } else {
    return "/images/defaultGroup.jpg"
  }
}

export function updateImageSrc(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/techGr.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/hikingGr.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/artGr.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/codingGr.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/natureGr.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/musicGr.jpg";
  } else {
    return "/images/dineGroup.jpg";
  }
}

export function updateImageSrcPhoto1(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/memoTech1.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/memoHike1.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/memoArt1.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/memoCode1.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/memoNature1.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/memoMusic1.jpg";
  } else {
    return "/images/memo1.jpg";
  }
}

export function updateImageSrcPhoto2(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/memoTech2.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/memoHike2.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/memoArt2.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/memoCode2.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/memoNature2.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/memoMusic2.jpg";
  } else {
    return "/images/memo2.jpg";
  }
}

export function updateImageSrcPhoto3(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/memoTech3.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/memoHike3.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/memoArt3.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/memoCode3.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/memoNature3.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/memoMusic3.jpg";
  } else {
    return "/images/memo3.jpg";
  }
}

export function updateImageSrcPhoto4(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/memoTech4.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/memoHike4.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/memoArt4.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/memoCode4.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/memoNature4.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/memoMusic4.jpg";
  } else {
    return "/images/memo4.jpg";
  }
}

export function updateImageSrcPhoto5(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/memoTech5.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/memoHike5.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/memoArt5.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/memoCode5.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/memoNature5.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/memoMusic5.jpg";
  } else {
    return "/images/memo5.jpg";
  }
}

export function updateImageSrcPhoto6(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/memoTech6.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/memoHike6.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/memoArt6.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/memoCode6.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/memoNature6.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/memoMusic6.jpg";
  } else {
    return "/images/memo6.jpg";
  }
}

export function updateImageSrcRightPhoto1(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/rightTech1.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/rightHike1.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/rightArt1.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/rightCode1.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/rightNature1.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/rightMusic1.jpg";
  } else {
    return "/images/dineEvent1.jpg";
  }
}

export function updateImageSrcRightPhoto2(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/rightTech2.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/rightHike2.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/rightArt2.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/rightCode2.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/rightNature2.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/rightMusic2.jpg";
  } else {
    return "/images/dineEvent2.jpg";
  }
}

// export function updateRightText(selectedGroup, rightText1, rightText2) {
//   if (selectedGroup.groupname === "Tech Enthusiasts") {
//     document.getElementById('rightText1').textContent = "Beyond Boundaries";
//     document.getElementById('rightText2').textContent = "Tech Cafe";
//   } else if (selectedGroup.groupname === "Hiking Club") {
//     return "/images/hikingGr.jpg";
//   } else if (selectedGroup.groupname === "Art Community") {
//     return "/images/artGr.jpg";
//   } else if (selectedGroup.groupname === "Coding Enthusiasts") {
//     return "/images/codingGr.jpg";
//   } else if (selectedGroup.groupname === "Nature Lovers") {
//     return "/images/natureGr.jpg";
//   } else if (selectedGroup.groupname === "Music Fans") {
//     return "/images/musicGr.jpg";
//   } else {
//     return "/images/defaultGroup.jpg";
//   }
// }