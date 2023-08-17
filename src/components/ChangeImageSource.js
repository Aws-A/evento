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