import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import * as firebase from "firebase"

// var config = {
//     apiKey: "AIzaSyDZAp-THeGKi2DaPvTlL1MhxfJOZiUbojE",
//     authDomain: "react-burger-builder-a55b6.firebaseapp.com",
//     databaseURL: "https://react-burger-builder-a55b6.firebaseio.com",
//     projectId: "react-burger-builder-a55b6",
//     storageBucket: "react-burger-builder-a55b6.appspot.com",
//     messagingSenderId: "763480710813"
//   };

// firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
