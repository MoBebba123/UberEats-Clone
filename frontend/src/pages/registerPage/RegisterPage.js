import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './registerPage.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { clearErrors, register } from '../../actions/userActions';
import { useAlert } from "react-alert";
import Loader from '../../components/loader/Loader.js'
import { Link, useLocation } from 'react-router-dom';
import { withRouter } from "react-router-dom"

const RegisterPage = ({ history }) => {
  const alert = useAlert();
  const location = useLocation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const redirect = location.search
    ? location.search.split('=')[1]
    : '/';

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert.error('Password and confirm password are not match');
    } else {
      dispatch(register(firstName, lastName, email, password));
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (userInfo) {
      history.push(redirect);
    }
  }, [dispatch, error, alert, history, redirect, userInfo]);

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
                  <Link to="login">
                    <button className='register_nav_right_button'>
                      <AccountCircleIcon style={{ marginRight: "5px" }} /> Log In</button>
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
                <form className='register_page_wrapper_right_form' onSubmit={submitHandler}>
                  <div className='register_form_item'>
                    <label className='register_form_item_label' htmlFor='firstName'>First Name *</label>
                    <input
                      type='text'
                      value={firstName}
                      id="firstName"
                      placeholder='enter your first name'
                      className='register_form_item_input'
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className='register_form_item'>
                    <label className='register_form_item_label' htmlFor='lastName'>Last Name *</label>
                    <input
                      type='text'
                      id='lastName'
                      placeholder='enter your last name'
                      className='register_form_item_input'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
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
                  <div className='register_form_item'>
                    <label className='register_form_item_label' htmlFor='confirmPassword'>Confirm Password *</label>
                    <input
                      type='password'
                      id="confirmPassword"
                      placeholder='confirm your password'
                      className='register_form_item_input'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <button className='register_form_button' type='submit'> Register </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </Fragment>

  )
}

export default withRouter(RegisterPage);