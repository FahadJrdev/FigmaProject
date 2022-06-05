import React, {useReducer, useState} from 'react';
import './investorCustomizer.css';
import { Button, ButtonWithArrow, Pill } from '../../component/buttons';
import { VscChevronDown } from "react-icons/vsc";

const initialState = {
  Nit: '',
  Company_name: '',
  Date_of_constitution: '',
  City_of_constitution: '',
  Constitution_Department: '',
  Country_of_Constitution: '',
  Economic_activity: '',
  Company_object: '',
  Sociodemographic_Department: '',
  Sociodemographic_Country: '',
  Address_main_office: '',
  Sociodemographic_City: '',
  Telephone: '',
  Email: '',
  Permit_description_1: '',
  Permit_description_2: '',
  Permit_description_3: '',
  add_special_permits: ''
}

function reducer(state, {field,value}) {
  return {
    ...state,
    [field]: value
  }
}

const InvestorCustomizer = ({title}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange =(e)=>{
    dispatch({field: e.target.name, value: e.target.value})
  }

//   let currentState = [];
//   for (let value in initialState){
//       currentState.push(value);
//   } 

//   const {currentState.join()} = state;
  

  const {Nit, Company_name, Date_of_constitution, City_of_constitution, Constitution_Department, Country_of_Constitution, Economic_activity, Company_object, Sociodemographic_Department, Sociodemographic_Country, Address_main_office, Sociodemographic_City, Telephone, Email, Permit_description_1, Permit_description_2, Permit_description_3} = state;
  
  const [switchPill,setSwitchPill] = useState(true);
  setTimeout(()=>{
      const pill = document.querySelector('.switch input');
      pill.addEventListener(`click`,()=>{
            setSwitchPill(!switchPill);
        })
        if(switchPill === true){
            pill.setAttribute(`checked`,``);
        }else{
            pill.removeAttribute(`checked`,``);
        }
        const adding_permits = document.querySelector(`.Permit-information .adding-permits-input`);
        console.log(adding_permits);
  })


  
  return (
      <>
        <div className="adding-investor-overlay"></div>
        <div className="adding-investor">
            <div className="investor-add">
            <div className="header-add">
                <ButtonWithArrow text={`Back`} background={`var(--primary-color)`} />
                <h1>{title}</h1>
            </div>
            <form action="" method='POST'>
                <div className="information corporate-information">
                <h1>Corporate information</h1>
                <ul>
                    <li>
                    <label htmlFor="Nit">Nit</label>
                    <input type="number" name='Nit' id='input_201px' placeholder='1' value={Nit} onChange={onChange} />
                    </li>
                    <li>
                    <label htmlFor="Company_name">Company name</label>
                    <input type="text" name='Company_name' id='input_180px' placeholder='Company name' value={Company_name} onChange={onChange} />
                    </li>
                    <li>
                    <label htmlFor="Date_of_constitution">Date of constitution</label>
                    <input type='text' name='Date_of_constitution' id='input_155px' placeholder='DD/MM/YYYY' value={Date_of_constitution} onChange={onChange} />
                    </li>
                    <li>
                    <label htmlFor="City_of_constitution">City of constitution</label>
                    <select id="input_146px" name='City_of_constitution' value={City_of_constitution} onChange={onChange} placeholder='City'>
                        <option value=""></option>
                        <option value="Tokyo">Tokyo</option>
                        <option value="New York">New York</option>
                        <option value="Torento">Torento</option>
                        <option value="Rio">Rio</option>
                        <option value="Barcelona">Barcelona</option>
                    </select> 
                    <input className='selectInput' name='City_of_constitution' type="text" placeholder='City' value={City_of_constitution} onChange={onChange} required/> 
                    <VscChevronDown />
                    </li>
                </ul>
                <ul>
                    <li>
                    <label htmlFor="Constitution_Department">Constitution Department</label>
                    <select id="input_170px" name='Constitution_Department' value={Constitution_Department} onChange={onChange} placeholder='Department'>
                        <option value=""></option>
                        <option value="Dept 1">Dept 1</option>
                        <option value="Dept 2">Dept 2</option>
                    </select> 
                    <input className='selectInput' type="text" name='Constitution_Department' placeholder='Department' value={Constitution_Department} onChange={onChange} required/> 
                    <VscChevronDown />
                    </li>
                    <li>
                    <label htmlFor="Country_of_Constitution">Country of Constitution</label>
                    <select id="input_170px" name='Country_of_Constitution' value={Country_of_Constitution} onChange={onChange} placeholder='Country'>
                        <option value=""></option>
                        <option value="Japan">Japan</option>
                        <option value="Canada">Canada</option>
                    </select> 
                    <input className='selectInput' type="text" name='Country_of_Constitution' placeholder='Country' value={Country_of_Constitution} onChange={onChange} required/> 
                    <VscChevronDown />
                    </li>
                    <li>
                    <label htmlFor="Economic_activity">Economic activity</label>
                    <select id="input_170px" name='Economic_activity' value={Economic_activity} onChange={onChange} placeholder='Economic activity'>
                        <option value=""></option>
                        <option value="Activity 1">Activity 1</option>
                        <option value="Activity 2">Activity 2</option>
                    </select> 
                    <input className='selectInput' type="text" name='Economic_activity' placeholder='Economic activity' value={Economic_activity} onChange={onChange} required/> 
                    <VscChevronDown />
                    </li>
                    <li>
                    <label htmlFor="Company_object">Company object</label>
                    <select id="input_199px" name='Company_object' value={Company_object} onChange={onChange} placeholder='Profit motive'>
                        <option value=""></option>
                        <option value="Motive 1">Motive 1</option>
                        <option value="Motive 2">Motive 2</option>
                    </select> 
                    <input className='selectInput' type="text" name='Company_object' placeholder='Profit motive' value={Company_object} onChange={onChange} required/> 
                    <VscChevronDown />
                    </li>
                </ul>
                </div>
                <div className="information sociodemographic-information">
                <h1>Sociodemographic information</h1>
                <ul>
                    <li>
                    <label htmlFor="Sociodemographic_Department">Department</label>
                    <select id="input_170px" name='Sociodemographic_Department' value={Sociodemographic_Department} onChange={onChange} placeholder='Department'>
                        <option value=""></option>
                        <option value="Dept 1">Dept 1</option>
                        <option value="Dept 2">Dept 2</option>
                    </select> 
                    <input className='selectInput' type="text" name='Sociodemographic_Department' placeholder='Department' value={Sociodemographic_Department} onChange={onChange} required/> 
                    <VscChevronDown />
                    </li>
                    <li>
                    <label htmlFor="Sociodemographic_Country">Country</label>
                    <select id="input_170px" name='Sociodemographic_Country' value={Sociodemographic_Country} onChange={onChange} placeholder='Country'>
                        <option value=""></option>
                        <option value="Japan">Japan</option>
                        <option value="Canada">Canada</option>
                    </select> 
                    <input className='selectInput' type="text" name='Sociodemographic_Country' placeholder='Country' value={Sociodemographic_Country} onChange={onChange} required/> 
                    <VscChevronDown />
                    </li>
                    <li>
                    <label htmlFor="Address_main_office">Address main office</label>
                    <input type="text" name='Address_main_office' id='input_201px' placeholder='Address' value={Address_main_office} onChange={onChange} />
                    </li>
                    <li>
                    <label htmlFor="Sociodemographic_City">City</label>
                    <select id="input_146px" name='Sociodemographic_City' value={Sociodemographic_City} onChange={onChange} placeholder='City'>
                        <option value=""></option>
                        <option value="Tokyo">Tokyo</option>
                        <option value="New York">New York</option>
                        <option value="Torento">Torento</option>
                        <option value="Rio">Rio</option>
                        <option value="Barcelona">Barcelona</option>
                    </select> 
                    <input className='selectInput' name='Sociodemographic_City' type="text" placeholder='City' value={Sociodemographic_City} onChange={onChange} required/> 
                    <VscChevronDown />
                    </li>
                </ul>
                </div>
                <div className="information Contact-information">
                <h1>Contact information</h1>
                <ul>
                    <li>
                    <label htmlFor="Telephone">Telephone</label>
                    <input type="text" name='Telephone' id='input_149px' placeholder='Telephone' value={Telephone} onChange={onChange} />
                    </li>
                    <li>
                    <label htmlFor="Email">Email</label>
                    <input type="email" name='Email' id='input_295px' placeholder='Email' value={Email} onChange={onChange} />
                    </li>
                </ul>
                </div>
                <div className="information Permit-information">
                <h1>Add special permits</h1>
                <div className="toggle_permission">
                    <p>No</p>
                    <Pill />
                    <p>yes</p>
                </div>
                {
                    switchPill === true
                    ?<>
                        <ul>
                            <li>
                            <label htmlFor="Permit_description_1">Permit description 1</label>
                            <input type="text" name='Permit_description_1' id='input_295px' placeholder='enter permission' value={Permit_description_1} onChange={onChange} />
                            </li>
                            <li>
                            <label htmlFor="Permit_description_2">Permit description 2</label>
                            <input type="text" name='Permit_description_2' id='input_295px' placeholder='enter permission' value={Permit_description_2} onChange={onChange} />
                            </li>
                            <li>
                            <label htmlFor="Permit_description_3">Permit description 3</label>
                            <input type="text" name='Permit_description_3' id='input_295px' placeholder='enter permission' value={Permit_description_3} onChange={onChange} />
                            </li>
                        </ul>
                        <Button text={`+`} background={`var(--primary-color)`} types={`button`} extraClass={`adding-permits-input`} />
                    </>
                    :<></>
                }
                </div>
                <div className="submit-form">
                <Button text={`Add`} background={`var(--primary-color)`} types={`submit`} />
                </div>
            </form>
            </div>
        </div>
      </>
  )
}

export default InvestorCustomizer;