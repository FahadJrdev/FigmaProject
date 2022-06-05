import React from 'react';
import './button.css';
import { VscChevronLeft } from "react-icons/vsc";
export const Button = ({text, background, types, extraClass}) => {
  return (
    <button type={`${types}`} className={`button ${extraClass}`} style={{background: `${background}`, color: `white`, display: 'inline-flex'}}>{text}</button>
  )
}

export const ButtonWithArrow = ({text, background}) => {
  return (
    <button className='buttonwitharrow' style={{background: `${background}`, color: `white`, display: 'inline-block'}}><VscChevronLeft style={{color: `white`}} />{text}</button>
  )
}


export const Pill = () => {
  return(
    <>
      <label className="switch">
        <input type="checkbox"  />
        <span className="slider round"></span>
      </label>
    </>
  )
}