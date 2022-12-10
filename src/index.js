import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCRkO4FU-kW76L7rE2JoVDTEuc6WCIPJUA",
  authDomain: "coderhouse-f33f1.firebaseapp.com",
  projectId: "coderhouse-f33f1",
  storageBucket: "coderhouse-f33f1.appspot.com",
  messagingSenderId: "624886245323",
  appId: "1:624886245323:web:9f754081d0f17a4c9cb84e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);