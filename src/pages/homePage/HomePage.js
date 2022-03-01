import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import './homePage.css'
import BackDrop from "../../components/BackDrop";
import SideBar from '../../components/SideBar.js'
import RoomIcon from '@material-ui/icons/Room';
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import Fade from 'react-reveal/Fade';

import { items } from "../../dummydata";


const HomePage = () => {
    const [navbar, setNavbar] = useState(false);
    const [navbarInput, setNavbarInput] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const ChangeNavBackgroundColor = () => {
        if (window.scrollY >= 20) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', ChangeNavBackgroundColor);

    const ShowNavbarInput = () => {
        if (window.scrollY >= 300) {
            setNavbarInput(true);
        } else {
            setNavbarInput(false);
        }
    };
    window.addEventListener('scroll', ShowNavbarInput);


    return (
        <>
            <nav className={navbar ? 'active' : ''} >
                <div className='logo'>
                    <MenuIcon onClick={toggleMenu} style={{ cursor: "pointer", fontSize: "30px" }} />
                    <BackDrop sidebar={isOpen} closeSidebar={toggleMenu} />
                    <SideBar sidebar={isOpen} closeSidebar={toggleMenu} />
                    <h3> Drone </h3> <h3>Ship</h3>
                </div>
                {navbarInput ? (
                    
                        <Fade top>
                    <div className='nav_search'>
                        <div className='nav_input_container'>
                            <label>
                                <RoomIcon style={{ fontSize: "30px" }} />
                            </label>
                            <input placeholder='Type your delivery adress here' />
                        </div>
                    </div>
                   </Fade> 
                ) : ''
                }

                <div className='register'>
                    <button>Log in</button>
                </div>
            </nav>
            <div className='homeContainer'>

                <div className='title_container' >
                    <h1>Your favorite food delivered to your door</h1>
                    <div className='input_container'>
                        <label>
                            <RoomIcon style={{ fontSize: "30px" }} />
                        </label>
                        <input placeholder='Type your Location' />
                        <label> <WatchLaterIcon /> </label>
                        <select>
                            <option>Deliver now</option>
                            <option>Deliver later</option>
                        </select>
                        <button>Find food</button>
                    </div>
                    <div className='phrase'>
                        <span>Sign up</span>
                        <span> for your recently used addresses</span>
                    </div>
                </div>
            </div>
            <div className='center_container'>
                <div className='center_wrapper'>
                    {items.map((item) => (

                        <div className='item_container'>
                            <img alt="" src={item.img} />
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}


                </div>
            </div>
        </>
    )
}

export default HomePage