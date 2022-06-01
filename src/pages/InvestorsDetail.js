import React from 'react';
import './pageStyle.css';
import { InvestorDetailCard } from '../component/cards';
import Header from '../sectionBlock/Header';

const InvestorsDetail = () => {
  return (
    <>
      <Header 
        pageTitle={`Investors Detail`}
        pageDesc={`Investor Information`} 
        displayBtn={`show`} 
        textBtn={`Add investor`} 
        colorBtn={`var(--primary-color)`} 
        displayArrowBtn={`show`} 
        textArrowBtn={`Back`} 
        colorArrowBtn={`var(--primary-color)`}
        displaySearch={`show`} />
      <div className='main investor'>
        <div className="cards grid-container">   
          <InvestorDetailCard 
            key={1} 
            color={`primary-color`}  
            title={[`Total investment amount`]} 
            text={`21,124,628.48`} 
            Ltd1Color={`secondary-color`} 
            Ltd1Text={`Muncher Inc.`} 
            Ltd1Number={`299,992.71`}
            Ltd2Color={`primary-color`} 
            Ltd2Text={`Muncher Brazil LTDA`} 
            Ltd2Number={`133,486.10`} 
          />
        </div>
      </div>
    </>
  )
}

export default InvestorsDetail;