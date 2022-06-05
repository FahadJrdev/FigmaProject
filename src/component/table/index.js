import React from 'react';
import './table.css';
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const Table = () => {
  return (
    <div className="table">         
        <div className="table-lists">
            <ul className="listHeader">
                <li className='listHeaderItem'>Investor name</li>
                <li className='listHeaderItem'>Country</li>
                <li className='listHeaderItem'>Investments- Projects</li>
                <li className='listHeaderItem'>USD Invested</li>
                <li className='listHeaderItem'>Actions</li>
            </ul>
            <ul className="listBody">
                <li className='listItem'>BANCOLDEX</li>
                <li className='listItem'>COLOMBIA</li>
                <li className='listItem'>17</li>
                <li className='listItem'>21,124,628.48</li>
                <li className='listItem'>See more</li>
            </ul>
            <ul className="listBody">
                <li className='listItem'>BANCOLDEX</li>
                <li className='listItem'>COLOMBIA</li>
                <li className='listItem'>17</li>
                <li className='listItem'>21,124,628.48</li>
                <li className='listItem'>See more</li>
            </ul>
            <ul className="listBody">
                <li className='listItem'>BANCOLDEX</li>
                <li className='listItem'>COLOMBIA</li>
                <li className='listItem'>17</li>
                <li className='listItem'>21,124,628.48</li>
                <li className='listItem'>See more</li>
            </ul>
            <ul className="listBody">
                <li className='listItem'>BANCOLDEX</li>
                <li className='listItem'>COLOMBIA</li>
                <li className='listItem'>17</li>
                <li className='listItem'>21,124,628.48</li>
                <li className='listItem'>See more</li>
            </ul>
        </div>
        <div className="pagination">
            <ul>
                <li className='paginate-item back'><VscChevronLeft /> </li>
                <li className='paginate-item active'>1</li>
                <li className='paginate-item'>2</li>
                <li className='paginate-item'>3</li>
                <li className='paginate-item'>4</li>
                <li className='paginate-item'>5</li>
                <li className='paginate-item next'><VscChevronRight /> </li>
            </ul>
        </div>
    </div>
  )
}

export default Table;