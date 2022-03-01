import React from 'react'
import { Link } from 'react-router-dom';
import '../pages/homePage/homePage.css';

const SideBar = ({ sidebar }) => {
  return (
    <div className={sidebar ? 'sidebar sidebar--open' : 'sidebar'} >
        <div className='sidebar_wrapper'>
            <Link to="/register" className='link'> 
            <div className='button_container'> 
            <button>Register</button> </div>
            </Link>

        </div>
    </div>
    )
}

export default SideBar