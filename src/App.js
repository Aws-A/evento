
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import EventsPage from './components/EventsPage';
import ProfilePage from './components/ProfilePage';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
        <NavBar/>

        <div class = "mainContainer">
      
        <EventsPage/>
        <ProfilePage/>
        <HomePage/>
        </div>

        <Footer/>
        <LoginButton />
        <LogoutButton />
    </div>
  );
}

export default App;
