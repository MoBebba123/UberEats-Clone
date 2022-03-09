import React, { useState } from 'react'
import BackDrop from '../../components/BackDrop';
import SideBar from '../../components/SideBar';
import MenuIcon from '@material-ui/icons/Menu';
import './productsPage.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import "swiper/css";
import "swiper/css/scrollbar";
import RoomIcon from '@material-ui/icons/Room';
import { categories } from '../../dummydata';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cart from '../../components/cart/Cart';
import Rotate from 'react-reveal/Rotate';

import Backdrop from '../../components/cart/Backdrop';
const ProductsPage = () => {
    const cartItems = true;
    let length = cartItems.length;
    length = 3;

    const [cart, setCart] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleCart = () => {
        setCart(prevState => !prevState);
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }



    return (
        <>
            <div className='nav'>
                <div className='logo_v2'>
                    <MenuIcon onClick={toggleMenu} style={{ cursor: "pointer", fontSize: "30px" }} />
                    <BackDrop sidebar={isOpen} closeSidebar={toggleMenu} />
                    <SideBar sidebar={isOpen} closeSidebar={toggleMenu} />
                    <Link to="/" style={{ textDecoration: "none", color: "inherit", display: "flex" }}>
                        <h3>Drone</h3><h3>Ship</h3>
                    </Link>
                </div>

                <div className='product_search'>
                    <div className='product_input_container'>
                        <form>
                            <input placeholder='drink, eat, dessert' />
                            <button type='submit'>

                                <SearchIcon style={{ fontSize: "30px" }} />
                            </button>
                        </form>
                    </div>
                </div>
                <div className='location'>
                    <div className='location_container'>

                        <RoomIcon />

                        <span className='location_container_span'>New York</span>
                    </div>
                </div>
                <div className='cart'>
                    <div className='location_container'>
                        <Badge badgeContent={length} onClick={toggleCart} color="primary">
                            <ShoppingCartIcon />
                        </Badge >
                        <span className='location_container_span' onClick={toggleCart}>Cart</span>
                    </div>
                    <Cart cart={cart} cartItems={cartItems} closeCart={toggleCart} />
                    <Backdrop cart={cart} closeCart={toggleCart} />

                </div>
            </div>

            <div style={{ height: "100vh" }}>
                <div className='categories'>
                    {categories.map((category) => (

                        <div className='categoryItem' key={category.id}>
                            <Rotate bottom left>
                                <img className='categoryImage' alt='' src={category.image} />
                            </Rotate>
                            <span className='categorySpan'>{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductsPage