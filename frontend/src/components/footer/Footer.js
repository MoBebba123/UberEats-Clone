import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import './footer.css';
const footer = () => {
    return (
        <div className='footer_container'>

            <div className='footer_logo'>
                <Link style={{ display: "flex", textDecoration: "none" }}>
                    <h3> Drone </h3> <h3>Ship</h3>
                </Link>
            </div>
            <div className='footer_center'>
                <div className='footer_center_left'>
                    <img alt='google play' src="https://i.ibb.co/fFj2vRS/1200px-Google-Play-Store-badge-EN-svg.webp" />
                    <img alt='google play' src="https://i.ibb.co/gt7Qy6s/270px-Download-on-the-App-Store-Badge-svg.png" />
                </div>
                <div className='footer_center_right'>
                    <div className='footer_center_right_col'>
                        <ul className='footer_center_right_col_ul'>
                            <li className='footer_center_right_col_li'>
                                <span className='footer_center_right_col_span'> Add your restaurant.</span>
                            </li>
                            <li className='footer_center_right_col_li'>
                                <span className='footer_center_right_col_span'>Register as a courier</span>
                            </li>
                            <li className='footer_center_right_col_li'>
                                <span className='footer_center_right_col_span'>Create a business account</span>
                            </li>
                            <li className='footer_center_right_col_li'>
                                <span className='footer_center_right_col_span'>Save on your first order</span>
                            </li>
                            <li className='footer_center_right_col_li'>
                                <span className='footer_center_right_col_span'> Restaurants near me</span>
                            </li>
                        </ul>
                    </div>
                    <div className='footer_center_right_col'>
                        <ul className='footer_center_right_col_ul'>

                            <li className='footer_center_right_col_li'>
                                <span className='footer_center_right_col_span'>Show all cities</span>
                            </li>
                            <li className='footer_center_right_col_li'>
                                <span className='footer_center_right_col_span'> Show all countries</span>
                            </li>
                            <li className='footer_center_right_col_li'>
                                <span className='footer_center_right_col_span'>For pickup near me</span>
                            </li>
                            <li className='footer_center_right_col_li'>
                                <span className='footer_center_right_col_span'>About Drone Ship</span>
                            </li>
                            <li className='footer_center_right_col_li'>
                                <span className='footer_center_right_col_span'>help center</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <hr></hr>
            <div className='footer_end'>
                <div className='footer_end_left'>
                    <div className='icon_container'>
                        <FacebookIcon />
                    </div>
                    <div className='icon_container'>
                        <InstagramIcon />
                    </div>
                    <div className='icon_container'>
                        <TwitterIcon />
                    </div>
                </div>
                <div className='footer_end_right'>
                    <span className='footer_end_right_span'> CopyRight © 2022 | DroneShip All rights reserved</span>
                </div>
            </div>
        </div>
    )
}

export default footer