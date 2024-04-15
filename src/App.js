import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Services from './components/pages/Projects'
import ContactUs from './components/pages/ContactUs'
import Team from './components/pages/Team'
import Flux from './components/pages/Fluv';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/services' Component={Services}></Route>
        <Route path='/services/fluv-geomorph' Component={Flux}></Route>
        <Route path='/contact' Component={ContactUs}></Route>
        <Route path='/team' Component={Team}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
