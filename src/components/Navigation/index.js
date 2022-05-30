import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages';
import Games from '../../pages/Games';
import Sportsbook from '../../pages/Sportsbook';
import Bonuses from '../../pages/Bonuses';
import Tournaments from '../../pages/Tournaments';
import News from '../../pages/News';
import Loyalty from '../../pages/Loyalty';
import Rules from '../../pages/Rules';
import FAQ from '../../pages/FAQ';
import Registration from '../../pages/Registration';
import Login from '../../pages/Login';
import Navbar from './Navbar';
function Navigations(){
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element = {<Home />}/>
          <Route path='/games' exact element = {<Games />}/>
          <Route path='/sportsbook' exact element = {<Sportsbook />}/>
          <Route path='/bonuses' exact element = {<Bonuses />}/>
          <Route path='/tournaments' exact element = {<Tournaments />}/>
          <Route path='/news' exact element = {<News />}/>
          <Route path='/loyalty' exact element = {<Loyalty />}/>
          <Route path='/rules' exact element = {<Rules />}/>
          <Route path='/FAQ' exact element = {<FAQ />}/>
          <Route path='/registration' exact element = {<Registration />}/>
          <Route path='/login' exact element = {<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navigations;