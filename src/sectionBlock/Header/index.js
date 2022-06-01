import React from 'react';
import { Searchbox } from '../../component/searchbox';
import './header.css';
import { Button, ButtonWithArrow } from '../../component/buttons';

const Header = ({displayArrowBtn, textArrowBtn, colorArrowBtn, pageTitle, pageDesc, displayBtn, textBtn, colorBtn, displaySearch}) => {
  return (
    <header>
      <div className="first-part">
        <div className={`display ${displayArrowBtn}`}>
          <ButtonWithArrow text={`${textArrowBtn}`} background={`${colorArrowBtn}`}  />
        </div>
        <div className="page-name">
          <p className='title'>{pageTitle}</p>
          <p className='desc'>{pageDesc}</p>
        </div>
      </div>
      <div className="second-part">
        <div className={`display ${displayBtn}`}>
          <Button text={`${textBtn}`} background={`${colorBtn}`}  />
        </div>
        <div className={`display ${displaySearch}`}>
          <Searchbox />
        </div>
      </div>
    </header>
  )
}

export default Header;