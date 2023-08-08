import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import EventsPage from './components/EventsPage';
import ProfilePage from './components/ProfilePage';
import HomePage from './components/HomePage';
import CommunicationsPage from './components/CommunicationsPage';
import GroupsPage from './components/GroupsPage';
import ContactUs from './components/ContactUs';
import ChosenEvent from './components/ChosenEvent';
import ChosenGroup from './components/ChosenGroup';
export default function App() {
  const [currentPage, setCurrentPage] = useState('homePage');

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log ("HandlePageChange " + page)
  };

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
        {currentPage === 'chosenPage' && <ChosenEvent/>}
        {currentPage === 'chosenPageGr' && <ChosenGroup/>}
        {/* {currentPage === 'contactUs' && <ContactUsPage />} */}
      </div>

      <Footer />
      {/* <LoginButton />
      <LogoutButton /> */}
    </div>
  );
}

