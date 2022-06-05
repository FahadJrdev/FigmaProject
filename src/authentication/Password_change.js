import React, {useReducer} from 'react';
import {Link} from 'react-router-dom';
import { Button } from '../component/buttons';

const initialState = {
    Current_password: '',
    New_password:'',
    Confirm_password:''
}

function reducer(state, {field,value}) {
  return {
    ...state,
    [field]: value
  }
}

const ChangePassword = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange =(e)=>{
      dispatch({field: e.target.name, value: e.target.value})
  }
  const {Current_password, New_password,Confirm_password} = state;
  return (
    <div className="welcome forget-password confirm-password">
        <div className="welcoming">
            <img className='logo' src="img/navbar-icon/logo.png" alt="logo" />
            <img className='hi-show' src="img/Hi.png" alt="welcome" />
            <div className="logIn">
                <h1 className='header'>PASSWORD CHANGE</h1>
                <p className='sub-header'>The New Password Must Have At Least One Uppercase, One Lowercase, One<br />Number, One Special Character And A Minimum Of Eight Characters.</p>
                <form action="" method='Post'>
                    <div className="user">
                        <label htmlFor="Current_password">Current password</label>
                        <input type="password" name='Current_password' value={Current_password} onChange={onChange} placeholder='Enter'  required />
                    </div>
                    <div className="user">
                        <label htmlFor="New_password">New password</label>
                        <input type="password" name='New_password' value={New_password} onChange={onChange} placeholder='Enter'  required />
                    </div>
                    <div className="user">
                        <label htmlFor="Confirm_password">Confirm password</label>
                        <input type="password" name='Confirm_password' value={Confirm_password} onChange={onChange} placeholder='Enter'  required />
                    </div>
                    <div className="submitButton">
                        <Link to='/'>
                            <Button text={`Reset`} background={`var(--primary-color)`} type={`submit`} />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ChangePassword;