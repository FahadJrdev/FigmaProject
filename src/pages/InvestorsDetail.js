import React, {useState} from 'react';
import './pageStyle.css';
import { InvestorDetailCard } from '../component/cards';
import Header from '../sectionBlock/Header';
import { LtdInfo } from '../component/cards/cardInfo';
import Tab from '../component/tab';
import GeneralInformation from '../sectionBlock/General-Information';
import Table from '../component/table';
import Reports from '../sectionBlock/Reports';
import InvestorCustomizer from '../sectionBlock/Investor-Sidebar';
import Navbar from '../sectionBlock/Navigation/Navbar';


const InvestorsDetail = () => {
  const [tab,setTab] = useState('General information');
  setTimeout(()=>{
    const Li = Array.from(document.querySelectorAll('.tab ul li'));
    Li.forEach((li)=>{
        li.addEventListener('click',()=>{
          setTab(li.dataset.tab);
        })
    })
  })
  const [attemptToAddInvestor, setAttemptToAddInvestor] = useState('close');
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
  })
  
return (
    <>
    {
      attemptToAddInvestor === 'open'
      ?<InvestorCustomizer title={`New Investor`} />
      :<></>
    }
      <Header pageTitle={`Investors Detail`} pageDesc={`Investor Information`} displayArrowBtn={`show`} textArrowBtn={`Back`} colorArrowBtn={`var(--primary-color)`} displaySearch={`show`} />
      <Navbar />
      <main className='main investor-detail'>
        <div className="cards grid-container">   
          <InvestorDetailCard color={`primary-color`} title={[`Total investment amount`]} text={`21,124,628.48`} Ltd ={LtdInfo} />
        </div>
        <div className="investor-detail-info">
          <Tab tab1={`General information`} tab2={`Projects`} tab3={`Reports`} hideCustomizer={`dn`} />
          { tab === 'General information'
            ? <GeneralInformation />
            :( tab === 'Projects'
            ? <Table />
            : <Reports />
            )
          }
        </div>
      </main>
    </>
  )
}

export default InvestorsDetail;