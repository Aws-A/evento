import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import EventsPage from './components/EventsPage';
import ProfilePage from './components/ProfilePage';
import HomePage from './components/HomePage';
import CommunicationsPage from './components/CommunicationsPage';
import { useAuth0 } from "@auth0/auth0-react";
import GroupsPage from './components/GroupsPage';
import ContactUs from './components/ContactUs';
import ChosenEvent from './components/ChosenEvent';
import ChosenGroup from './components/ChosenGroup';
import CreateEvent from './components/CreateEvent';
import CreateGroup from './components/CreateGroup';


export default function App() {
  const [currentPage, setCurrentPage] = useState('homePage');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null); 

  const handlePageChange = (page, event) => {
    setCurrentPage(page);
    setSelectedEvent(event);
    console.log("HandlePageChange " + page, event);
  };

  const [data, setData] = useState([]);

  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated && user) {
    // const { name, email } = user;
    // console.log(user);
    // console.log("User nickname:", user.nickname);
  }
   

  

  return (
    <div className="App">
      <Header />
      <NavBar onNavChange={handlePageChange} />

      <div className="mainContainer">
      
        {currentPage === 'homePage' && <HomePage onHomeChange={handlePageChange} />}
        {currentPage === 'explore' && <EventsPage onHomeChange={handlePageChange}/>}
        {currentPage === 'profile' && <ProfilePage />}
        {currentPage === 'communications' && <CommunicationsPage/>}
        {currentPage === 'groups' && <GroupsPage onHomeChange={handlePageChange}/>}
        {currentPage === 'contactUs' && <ContactUs/>}
        {/* {currentPage === 'chosenPage' && <ChosenEvent/>} */}
        {currentPage === 'chosenPageGr' && selectedEvent && (
  <ChosenGroup selectedGroup={selectedEvent} />
)}
        {currentPage === 'createEvent' && <CreateEvent onHomeChange/>}
        {currentPage === 'createGroup' && <CreateGroup onHomeChange/>}
        {currentPage === 'chosenPage' && selectedEvent && (
          <ChosenEvent event={selectedEvent} />
        )}
        {/* {currentPage === 'contactUs' && <ContactUsPage />} */}
      </div>

      <Footer />
      {/* <LoginButton />
      <LogoutButton /> */}
    </div>
  );
}

