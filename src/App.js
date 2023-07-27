
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Header from './components/Header';
import Footer from './components/Footer';
import HeaderBar from './components/HeaderBar';
import EventsPage from './components/eventsPage';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <div className="App">
      <Header />
        <HeaderBar/>

        <div class = "mainContainer">
        <LoginButton />
        <LogoutButton />
        <EventsPage/>
        <ProfilePage/>
        </div>

        <Footer/>
    </div>
  );
}

export default App;
