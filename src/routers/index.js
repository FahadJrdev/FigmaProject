import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Investors from '../pages/Investors';
import Projects from '../pages/Projects';
import Revenues from '../pages/Revenues';
import Expenses from '../pages/Expenses';
import Reports from '../pages/Reports';
import Configuration from '../pages/Configuration';
import Help from '../pages/Help';
import InvestorsDetail from '../pages/InvestorsDetail';
import Login from '../authentication/Login';
import ForgetPassword from '../authentication/Forget_Password';
import ChangePassword from '../authentication/Password_change';
function Routers(){
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element = {<Login/>}/>
          <Route path='/forget-password' exact element = {<ForgetPassword />}/>
          <Route path='/change-password' exact element = {<ChangePassword />}/>
          <Route path='/Dashboard' exact element = {<Dashboard />}/>
          <Route path='/Investors' exact element = {<Investors />}/>
          <Route path='/InvestorsDetail' exact element = {<Projects />}/>
          <Route path='/Revenues' exact element = {<Revenues />}/>
          <Route path='/Expenses' exact element = {<Expenses />}/>
          <Route path='/Reports' exact element = {<Reports />}/>
          <Route path='/Configuration' exact element = {<Configuration />}/>
          <Route path='/Help' exact element = {<Help />}/>
          <Route path='/Projects' exact element = {<InvestorsDetail />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routers;