import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Hello from './component/Hello';
import Users from './component/User';
import TajHero from './component/TajHero';
import Login from './component/Login';
import TajAbout from './component/TajAbout';
import TajHighlights from './component/TajHighlights';
import TajOffers from './component/TajOffers';
import Loader from './component/Loader';




function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TajHero />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
   <Loader />
        <TajAbout />
        <TajHighlights />
        <TajOffers />
        
      {/* <TajHero /> */}
 
    
    </div>
  );
}

export default App;






