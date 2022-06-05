import React, {useReducer} from 'react';
import './authentication.css';
import { Link } from 'react-router-dom';
import { Button } from '../component/buttons';

const initialState = {
  user: '',
  password: ''
}

function reducer(state, {field,value}) {
  return {
    ...state,
    [field]: value
  }
}

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange =(e)=>{
    dispatch({field: e.target.name, value: e.target.value})
  }
  const {user, password} = state;
  return (
      <div className="welcome">
          <div className="welcoming">
            <img className='logo' src="img/navbar-icon/logo.png" alt="logo" />
            <img className='welcome-show' src="img/welcome.png" alt="welcome" />
            <div className="logIn">
              <h1 className='header'>Welcome</h1>
              <p className='sub-header'>Please Log In</p>
              <form action="" method='Post'>
                <div className="user">
                  <label htmlFor="user">User</label>
                  <input type="text" name='user' value={user} onChange={onChange} placeholder='Enter User'  required />
                </div>
                <div className="password">
                  <label htmlFor="password">Password</label>
                  <input type="text" name='password' value={password} onChange={onChange} placeholder='Enter Password' required />
                </div>
                <div className="remember-forget">
                  <p className="remember">Remember my user</p>
                  <Link to='/forget-password'>
                    <p className="forget">I Forgot My Password</p>
                  </Link>
                </div>
                <div className="submitButton">
                  <Link to='/Dashboard'>
                    <Button text={`Start Session`} background={`var(--primary-color)`} type={`submit`} />
                  </Link>
                </div>
              </form>
          </div>
        </div>
      </div>
    )
}

export default Login;