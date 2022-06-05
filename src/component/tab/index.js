import React from 'react';
import './tab.css';
import { Configuration, Download, Print } from '../icon/icon';
const Tab = ({tab1, tab2, tab3, hideTab3, hideCustomizer}) => {
    setTimeout(()=>{
        const Li = Array.from(document.querySelectorAll('.tab ul li'));
        Li.forEach((li,i)=>{
            li.addEventListener('click',()=>{
                Li.forEach((li)=>{
                    li.classList.remove('active');
                })
                Li[i].classList.add('active');
            })
        })
    })
  return (
      <>
        <div className="tab">
            <ul>
                <li data-tab={`${tab1}`} className='tab1 color1 active'>{tab1}</li>
                <li data-tab={`${tab2}`} className='tab2 color2'>{tab2}</li>
                <li data-tab={`${tab3}`} className={`tab3 color3 ${hideTab3}`}>{tab3}</li>
            </ul>
            <div className={`process-info ${hideCustomizer}`}>
                <Configuration />
                <Download />
                <Print />
            </div>
        </div>
      </>
  )
}

export default Tab;