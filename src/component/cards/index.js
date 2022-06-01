import React from 'react';
import { ArrowUp } from '../icon/icon';
import './cards.css';

export const InvestorCard = ({color,title,text,miniText,rotateArrowIcon, miniDisplay}) => {
  return (
    <div className={`investorCard ${color}`}>
        <p className='title'><span>{title}</span></p>
        <p className='desc'>
            <span className='color-text'>{text}</span>
            <span className={`mini-text ${miniDisplay}`}>{miniText}<ArrowUp rotate={rotateArrowIcon} /></span>
        </p>
    </div>
  )
};
