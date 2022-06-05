import React, {useState} from 'react';
import './pageStyle.css';
import { InvestorCard } from '../component/cards';
import Header from '../sectionBlock/Header';
import Tab from '../component/tab';
import Table from '../component/table';
import InvestorCustomizer from '../sectionBlock/Investor-Sidebar';
import Navbar from '../sectionBlock/Navigation/Navbar';

const Investors = () => {
  const [attemptToAddInvestor, setAttemptToAddInvestor] = useState('close');
  const [tabName, setTabName] = useState('fund1');
  setTimeout(()=>{
    const addInvestor = document.querySelector('.second-part button');
    if(addInvestor){
      addInvestor.addEventListener('click',()=>{
        setAttemptToAddInvestor('open');
      })
    }
    const backButton = document.querySelector('.adding-investor .header-add button');
    if(backButton){
      backButton.addEventListener('click',()=>{
        setAttemptToAddInvestor('close');
      })
    }
    const addingInvestorOverlay = document.querySelector('.adding-investor-overlay');
    if(addingInvestorOverlay){
      addingInvestorOverlay.addEventListener('click',()=>{
        setAttemptToAddInvestor('close');
      })
    }
    const fund1 = document.querySelector('.fund-table .color1');
    fund1.addEventListener('click',()=>{
      setTabName('fund1');
    })
    const fund2 = document.querySelector('.fund-table .color2');
    fund2.addEventListener('click',()=>{
      setTabName('fund2');
    })
  })
  return (
    <>
      {
        attemptToAddInvestor === 'open'
        ?<InvestorCustomizer title={`New Investor`} />
        :<></>
      }
      {
        tabName === 'fund1'
        ?<Header pageTitle={`Investors`} pageDesc={`Investor Information`} displayBtn={`show`} textBtn={`Add investor`} colorBtn={`var(--primary-color)`} displaySearch={`show`} />
        :<Header pageTitle={`Investors`} pageDesc={`Investor Information`} displayBtn={`show`} textBtn={`Add investor`} colorBtn={`var(--tartiary-color)`} displaySearch={`show`} />
      }
      <Navbar />
      <main className='main investor'>
        <div className="cards grid-container">   
          <InvestorCard key={1} color={`primary-color`}  title={[`NET Amounts`, <br key={1}/> ,`per Investor`]} text={`105,551,274.20`} />
          <InvestorCard key={2} color={`secondary-color`}  title={[`% of each`, <br key={2}/> ,`LP Commitment`]} text={`84.459%`} />
          <InvestorCard key={3} color={`tartiary-color`}  title={`% of Total Called Capital`} text={`100.00%`} />
        </div>
        <div className="fund-table">
          <Tab tab1={`Fund 1`} tab2={`Fund 2`} hideTab3={`dn`} />
          <Table />
        </div>
      </main>
    </>
  )
}

export default Investors;