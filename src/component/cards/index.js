import React from 'react';
import { ArrowUp } from '../icon/icon';
import './cards.css';

export const InvestorCard = ({color,title,text,miniText,rotateArrowIcon, miniDisplay}) => {
  return (
    <div className={`investorCard ${color}`}>
        <div className="bind">
          <p className='title'><span>{title}</span></p>
          <p className='desc'>
              <span className='color-text'>{text}</span>
              <span className={`mini-text ${miniDisplay}`}>{miniText}<ArrowUp rotate={rotateArrowIcon} /></span>
          </p>
        </div>
    </div>
  )
};


export const InvestorDetailCard = ({color,title,text,Ltd1Color,Ltd1Text,Ltd1Number,Ltd2Color,Ltd2Text,Ltd2Number}) => {
  return (
    <div className={`investorCard ${color}`}>
      <div className="detail-bind">
        <p className='title'><span>{title}</span></p>
        <p className='desc'>
            <span className='color-text'>{text}</span>
        </p>
      </div>
      <div className="Ltds show">
        <div className="Ltd">
          <hr className={`Ltd-bar ${Ltd1Color}`} />
          <div className="Ltd-details">
            <p className="text">{Ltd1Text}</p>
            <p className={`number ${Ltd1Color}`}>{Ltd1Number}</p>
          </div>
        </div>
        <div className="Ltd">
          <hr className={`Ltd-bar ${Ltd2Color}`} />
          <div className="Ltd-details">
            <p className="text">{Ltd2Text}.</p>
            <p className={`number ${Ltd2Color}`}>{Ltd2Number}</p>
          </div>
        </div>
      </div>
    </div>
  )
};