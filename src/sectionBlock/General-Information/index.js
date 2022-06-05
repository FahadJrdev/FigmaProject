import React from 'react';
import {DocumentCard} from '../../component/cards';
import { Button } from '../../component/buttons';
import './genera.css';
const GeneralInformation = () => {
  return (
    <div className="general-information">
        <div className="investor-information">
        <div className="current-information">
            <ul>
            <li className='investor-info'>Investor name</li>
            <li className='investor-info'>EIB</li>
            </ul>
            <ul>
            <li className='investor-info'>Total investment</li>
            <li className='investor-info'>21,124,628.48</li>
            </ul>
            <ul>
            <li className='investor-info'># Total projects</li>
            <li className='investor-info'>17</li>
            </ul>
        </div>
        <div className="information-customizer">
            <Button text={`Update information`} background={`var(--primary-color)`} />
            <Button text={`Generate account statement`} background={`var(--tartiary-color)`} />
        </div>
        </div>
        <div className="investor-document">
        <h2>Investor documents</h2>
        <div className="documents">
            <DocumentCard key={1} text={`Contract`} />
            <DocumentCard key={2} text={`Coditions`} />
            <DocumentCard key={3} text={`Investment`} />
            <DocumentCard key={4} text={[`Restricted`, <br key={1} /> ,`lists`]} />
        </div>
        </div>
    </div>
  )
}

export default GeneralInformation;