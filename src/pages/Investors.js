import React from 'react';
import './pageStyle.css';
import { InvestorCard } from '../component/cards';
import Header from '../sectionBlock/Header';

const Investors = () => {
  return (
    <>
      <Header pageTitle={`Investors`} pageDesc={`Investor Information`} displayBtn={`show`} textBtn={`Add investor`} colorBtn={`var(--primary-color)`} displaySearch={`show`} />
      <div className='main investor'>
        <div className="cards grid-container">   
          <InvestorCard color={`primary-color`}  title={[`NET Amounts`, <br/> ,`per Investor`]} text={`105,551,274.20`} />
          <InvestorCard color={`secondary-color`}  title={[`% of each`, <br/> ,`LP Commitment`]} text={`84.459%`} />
          <InvestorCard color={`tartiary-color`}  title={`% of Total Called Capital`} text={`100.00%`} />
        </div>
      </div>
    </>
  )
}

export default Investors;