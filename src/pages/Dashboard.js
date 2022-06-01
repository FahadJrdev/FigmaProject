import React from 'react';
import Header from '../sectionBlock/Header';
import {InvestorCard} from '../component/cards';
const Dashboard = () => {
  return (
    <>
      <Header pageTitle={`Dash board`} pageDesc ={`General indicators`} displaySearch={`show`} />
      <div className='main dashboard'>
        <div className="cards grid-container">   
          <InvestorCard key={1} color={`primary-color`}  title={`Investors`} text={`271`} miniText={`+ 0,7% `} miniDisplay={`show`}/>
          <InvestorCard key={2} color={`secondary-color`}  title={`Projects`} text={`69`} miniText={`- 1,7% `} miniDisplay={`show`} rotateArrowIcon={`down`}/>
          <InvestorCard key={3} color={`tartiary-color`}  title={`New investors`} text={`5`} miniText={`+ 1% `} miniDisplay={`show`}/>
        </div>
      </div>
    </>
  )
}

export default Dashboard;