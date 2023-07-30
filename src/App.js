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

export default function App() {
  const [currentPage, setCurrentPage] = useState('homePage');

  const handleNavChange = (page) => {
    setCurrentPage(page);
    console.log ("UWU")
  };

  return (
    <div className="App">
      <Header />
      <NavBar onNavChange={handleNavChange} />

      <div className="mainContainer">
        {currentPage === 'homePage' && <HomePage />}
        {currentPage === 'explore' && <EventsPage />}
        {currentPage === 'profile' && <ProfilePage />}
        {/* {currentPage === 'contactUs' && <ContactUsPage />} */}
      </div>

      <Footer />
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

