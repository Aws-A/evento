
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Header from './components/Header';
import Footer from './components/Footer';
import HeaderBar from './components/HeaderBar';

function App() {
  return (
    <div className="App">
      <Header />
        <HeaderBar/>

        <div class = "mainContainer">
        <LoginButton />
        <LogoutButton />
        </div>
        
        <Footer/>
    </div>
  );
}

export default App;
