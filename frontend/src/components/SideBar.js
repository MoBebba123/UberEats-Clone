import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../pages/homePage/homePage.css';
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ViewListIcon from '@material-ui/icons/ViewList';
import HelpIcon from '@material-ui/icons/Help';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const SideBar = ({ sidebar }) => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    };

    return (
        <div className={sidebar ? 'sidebar sidebar--open' : 'sidebar'} >
            <div className='sidebar_wrapper'>
                {userInfo ? (
                    <>
                        <div className='user_settings'>
                            <img className='user_settings_img' alt=''
                                src={
                                    userInfo.profilePicture ?
                                        userInfo.profilePicture :
                                        'https://i.ibb.co/V9xW2SL/default.jpg'
                                }
                            />
                            <div className='user_settings_div'>
                                <span>{userInfo.firstName}</span>
                                <span>Settings</span>
                            </div>
                        </div>
                        <div className='user_menu'>
                            <div className='user_menu_item'>
                                <ViewListIcon style={{ marginRight: '20px', marginLeft: '20px' }} />    Orders
                            </div>
                            <div className='user_menu_item'>
                                <FavoriteIcon style={{ marginRight: '20px', marginLeft: '20px' }} />   Favorite
                            </div>
                            <div className='user_menu_item'>
                                <HelpIcon style={{ marginRight: '20px', marginLeft: '20px' }} />    Help
                            </div>
                            <div className='user_menu_item'>
                                <LocalOfferIcon style={{ marginRight: '20px', marginLeft: '20px' }} />         offers
                            </div>
                            <div className='user_menu_item' onClick={signoutHandler}>
                                <ExitToAppIcon style={{ marginRight: '20px', marginLeft: '20px' }} />  Log Out
                            </div>
                        </div>
                        <div className='user_links'>
                        <Link className="link" to="/products" style={{ color: 'inherit' }}>

                            <div className='user_links_wrapper'>
                                <span className='user_links_span'>Discover restaurant nearby</span>
                            </div>
                            </Link>
                            <div className='user_links_wrapper'>
                                <span className='user_links_span'>Create a business account</span>
                            </div>
                            <div className='user_links_wrapper'>
                                <span className='user_links_span'>Add your restaurant</span>
                            </div>
                            <div className='user_links_wrapper'>
                                <span className='user_links_span'>Register as a courier</span>
                            </div>

                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/register" className='link'>
                            <div className='button_container'>
                                <button>Register</button>
                            </div>
                        </Link>
                        <div className='sidebar_list'>
                            <ul className='sidebar_ul'>
                                <Link className="link" to="/products" style={{ color: 'inherit' }}>
                                    <li className='sidebar_li'><span className='sidebar_li_span'>Discover restaurant nearby</span></li>
                                </Link>
                                <li className='sidebar_li'><span className='sidebar_li_span'>Create a business account</span></li>
                                <li className='sidebar_li'><span className='sidebar_li_span'>Add your restaurant</span></li>
                                <li className='sidebar_li'><span className='sidebar_li_span'>Register as a courier</span></li>
                            </ul>
                        </div>


                    </>

                )}

                <div className='sidebar_end'>
                    <div className='sidebar_end_col'>
                        <div className='sidebar_end_col_left'>
                            <span className='sidebar_end_col_left_span'>Drone</span>
                            <span className='sidebar_end_col_left_span'>Ship</span>
                        </div>
                        <div className='sidebar_end_col_right'>
                            <span className='sidebar_end_col_right_span'>The app has even more to offer.</span>
                        </div>
                    </div>
                    <div className='sidebar_end_button_container'>
                        <button className='sidebar_end_button'> <AppleIcon /> Apple</button>
                        <button className='sidebar_end_button'><AndroidIcon /> Android</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SideBar