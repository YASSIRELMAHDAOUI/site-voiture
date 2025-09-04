
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import Detail from './details';
import Reserver from './reservation';


const Applocation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/details/:id" element={<Detail/>} />
        <Route path='/reservation' element={<Reserver/>}/>

      </Routes>
    </Router>
  );
};

export default Applocation;
