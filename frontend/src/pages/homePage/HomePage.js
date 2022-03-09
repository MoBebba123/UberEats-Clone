import React, { Fragment, useEffect, useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import './homePage.css'
import BackDrop from "../../components/BackDrop";
import SideBar from '../../components/SideBar.js'
import RoomIcon from '@material-ui/icons/Room';
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import Fade from 'react-reveal/Fade';
import { items, countries } from "../../dummydata";
import { useSelector } from 'react-redux';
import Loader from '../../components/loader/Loader';
import { Link } from 'react-router-dom';

const HomePage = ({ history }) => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading } = userSignin;
    useEffect(() => {
        if (userInfo === false) {
            history.push("/login");
        }
    }, [history, userInfo]);
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
        if (window.scrollY >= 300 && window.innerWidth >= 760) {
            setNavbarInput(true);
        } else {
            setNavbarInput(false);
        }
    };
    window.addEventListener('scroll', ShowNavbarInput);
    return (
        <Fragment>
            {loading ? (
                <Loader/>
            ) : (
                <>
                    <nav className={navbar ? 'active' : ''} >
                        <div className='logo'>
                            <MenuIcon onClick={toggleMenu} style={{ cursor: "pointer", fontSize: "30px" }} />
                            <BackDrop sidebar={isOpen} closeSidebar={toggleMenu} />
                            <SideBar sidebar={isOpen} closeSidebar={toggleMenu} />
                            <h3>Drone</h3><h3>Ship</h3>
                        </div>
                        {
                            navbarInput ? (
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
                            {userInfo? '' : (
                            <Link to="/login">
                            <button>Log in</button>
                            </Link>
                            
                            ) }
                            
                        </div>
                    </nav>
                    <div className='homeContainer'>
                        <div className='title_container' >
                            <h1>Your favorite food delivered to your door</h1>
                            <div className='input_container'>

                                <label> <RoomIcon style={{ fontSize: "30px" }} /> </label>
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
                    <h1 style={{ fontSize: "40px", fontWeight: "700", fontFamily: "sans-serif", padding: "40px 40px " }}>Countries, where DroneShip is available</h1>
                    <div className='countries_container'>
                        <div className='countries_wrapper'>
                            <div className='countries_col'>
                                <ul className='countries_col_ul'>
                                    {countries.slice(0, 6).map((item) => (
                                        <li className='countries_col_li'>
                                            <span className='countries_col_span'>{item.countryName}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='countries_col'>
                                <ul className='countries_col_ul'>
                                    {countries.slice(6, 12).map((item) => (
                                        <li className='countries_col_li'>
                                            <span className='countries_col_span'>{item.countryName}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='countries_col'>
                                <ul className='countries_col_ul'>
                                    {countries.slice(12, 18).map((item) => (
                                        <li className='countries_col_li'>
                                            <span className='countries_col_span'>{item.countryName}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='countries_col'>
                                <ul className='countries_col_ul'>
                                    {countries.slice(18, 24).map((item) => (
                                        <li className='countries_col_li'>
                                            <span className='countries_col_span'>{item.countryName}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </>

            )}
        </Fragment>
    )
}

export default HomePage