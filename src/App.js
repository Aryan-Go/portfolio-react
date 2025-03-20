import logo from './logo.svg';
import react from 'react';

import '../src/App.css'
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Index from '../public/index.html';
import Navbar from './components/Navbar';
import Box from './components/Box';

function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="myInfo">
            <h1>Hello Everyone</h1>
            <img height="100px" width="100px" src='https://github.githubassets.com/assets/gc_banner_light-24900d64bc7a.png'></img>
        </div>
        <Box />
      </div>
  );
}

export default App;
