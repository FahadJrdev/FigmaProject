import React from 'react';
import './button.css';
import { VscChevronLeft } from "react-icons/vsc";
export const Button = ({text, background}) => {
  return (
    <button className='button' style={{background: `${background}`, color: `white`, display: 'inline-flex'}}>{text}</button>
  )
}

export const ButtonWithArrow = ({text, background}) => {
  return (
    <button className='buttonwitharrow' style={{background: `${background}`, color: `white`, display: 'inline-block'}}><VscChevronLeft style={{color: `white`}} />{text}</button>
  )
}
