import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import Investors from '../../pages/Investors';
import Projects from '../../pages/Projects';
import Revenues from '../../pages/Revenues';
import Expenses from '../../pages/Expenses';
import Reports from '../../pages/Reports';
import Configuration from '../../pages/Configuration';
import Help from '../../pages/Help';
import Navbar from './Navbar';
function Navigations(){
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element = {<Dashboard />}/>
          <Route path='/Investors' exact element = {<Investors />}/>
          <Route path='/Projects' exact element = {<Projects />}/>
          <Route path='/Revenues' exact element = {<Revenues />}/>
          <Route path='/Expenses' exact element = {<Expenses />}/>
          <Route path='/Reports' exact element = {<Reports />}/>
          <Route path='/Configuration' exact element = {<Configuration />}/>
          <Route path='/Help' exact element = {<Help />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navigations;