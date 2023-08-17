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
    return "/images/defaultGroup.jpg";
  }
}

export function updateImageSrcPhoto1(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/memoTech1.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/hikingGr.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/memoArt1.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/codingGr.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/natureGr.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/musicGr.jpg";
  } else {
    return "/images/defaultGroup.jpg";
  }
}

export function updateImageSrcPhoto2(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/memoTech2.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/hikingGr.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/memoArt2.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/codingGr.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/natureGr.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/musicGr.jpg";
  } else {
    return "/images/defaultGroup.jpg";
  }
}

export function updateImageSrcPhoto3(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/memoTech3.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/hikingGr.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/memoArt3.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/codingGr.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/natureGr.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/musicGr.jpg";
  } else {
    return "/images/defaultGroup.jpg";
  }
}

export function updateImageSrcPhoto4(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/memoTech4.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/hikingGr.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/memoArt4.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/codingGr.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/natureGr.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/musicGr.jpg";
  } else {
    return "/images/defaultGroup.jpg";
  }
}

export function updateImageSrcPhoto5(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/memoTech5.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/hikingGr.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/memoArt5.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/codingGr.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/natureGr.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/musicGr.jpg";
  } else {
    return "/images/defaultGroup.jpg";
  }
}

export function updateImageSrcPhoto6(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/memoTech6.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/hikingGr.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/memoArt6.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/codingGr.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/natureGr.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/musicGr.jpg";
  } else {
    return "/images/defaultGroup.jpg";
  }
}

export function updateImageSrcRightPhoto1(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/rightTech1.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/hikingGr.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/rightArt1.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/codingGr.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/natureGr.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/musicGr.jpg";
  } else {
    return "/images/defaultGroup.jpg";
  }
}

export function updateImageSrcRightPhoto2(selectedGroup) {
  if (selectedGroup.groupname === "Tech Enthusiasts") {
    return "/images/rightTech2.jpg";
  } else if (selectedGroup.groupname === "Hiking Club") {
    return "/images/hikingGr.jpg";
  } else if (selectedGroup.groupname === "Art Community") {
    return "/images/rightArt2.jpg";
  } else if (selectedGroup.groupname === "Coding Enthusiasts") {
    return "/images/codingGr.jpg";
  } else if (selectedGroup.groupname === "Nature Lovers") {
    return "/images/natureGr.jpg";
  } else if (selectedGroup.groupname === "Music Fans") {
    return "/images/musicGr.jpg";
  } else {
    return "/images/defaultGroup.jpg";
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