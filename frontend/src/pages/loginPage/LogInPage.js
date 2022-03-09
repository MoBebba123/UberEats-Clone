import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/loader/Loader.js'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { clearErrors, signin } from '../../actions/userActions.js';
import { useAlert } from 'react-alert';
import { Link } from 'react-router-dom';


const LogInPage = ({ history, location }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (userInfo) {
      history.push('/');
    }

  }, [alert, error, dispatch, history, userInfo]);


  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
          <nav className='register_nav'>
            <div className='register_nav_left'>
              <div className="register_nav_left_wrapper">
                <Link to='/' className='link' style={{color:"inherit"}}>
                  Drone Ship
                </Link>
              </div>
            </div>
            <div className='register_nav_right'>
              <div className="register_nav_right_wrapper">
                <div className='register_nav_right_wrapper_items'> <button className='register_nav_right_button'>Contact Us</button> </div>
                <div className='register_nav_right_wrapper_items'>
                  <Link to="register">

                    <button className='register_nav_right_button'><AccountCircleIcon style={{ marginRight: "5px" }} /> Register</button>
                  </Link>
                </div>
              </div>
            </div>

          </nav>
          <div className='register_page_container'>
            <div className='register_page_wrapper'>
              <div className='register_page_wrapper_left'>
                <h3 className='register_page_wrapper_left_h3'>Welcome</h3>
                <p className='register_page_wrapper_left_p'>register with simple clicks and get your hot foods<br /> to your door. </p>
                <img className='register_page_wrapper_left_image' alt='' src='https://i.ibb.co/dDSFxkS/Untitled-21.png' />
              </div>
              <div className='register_page_wrapper_right'>
                <form onSubmit={loginSubmit} className='register_page_wrapper_right_form' >

                  <div className='register_form_item'>
                    <label className='register_form_item_label' htmlFor='email'>E-mail *</label>
                    <input
                      type='email'
                      id="email"
                      placeholder='enter your email'
                      className='register_form_item_input'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='register_form_item'>
                    <label className='register_form_item_label' htmlFor='password'>Password *</label>
                    <input
                      type='password'
                      id="password"
                      placeholder='enter your password'
                      className='register_form_item_input'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button className='register_form_button' type='submit'>Log In </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </Fragment>

  )
}

export default LogInPage