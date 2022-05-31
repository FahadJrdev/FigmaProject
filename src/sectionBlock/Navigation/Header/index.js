import React from 'react';
import { Searchbox } from '../../../component/searchbox';
import './header.css';
import { Button, ButtonWithArrow } from '../../../component/buttons';

const Header = () => {
  return (
    <header>
      <div className="first-part">
        <ButtonWithArrow text={'Back'} background={'var(--primary-color)'} />
        <div className="page-name">
          <p className='title'>Project Detail</p>
          <p className='desc'>Project information</p>
        </div>
      </div>
      <div className="second-part">
        <Button text={'Project Approval'} background={'var(--primary-color)'} />
        <Searchbox />
      </div>
    </header>
  )
}

export default Header;