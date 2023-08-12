// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider 
      domain={process.env.REACT_APP_AUTHO_DOMAIN}
      clientId={process.env.REACT_APP_AUTHO_CLIENT_ID}
      redirectUri={window.location.origin}
      scope="openid profile email"//this scope doesnt work
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);


