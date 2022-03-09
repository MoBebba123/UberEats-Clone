import React from 'react'
import './cart.css'
import CloseIcon from '@material-ui/icons/Close';
const Cart = ({ closeCart, cart ,cartItems}) => {
   
    return (
        <>
            <div className={cart ? "cartContainer open" : 'cartContainer'}>
                <div className='buttonContainer'> <button onClick={closeCart} className='button'><CloseIcon /> </button> </div>
                {
                    cartItems ? (
                        <div className='productsContainer'>
                            <div className='productItem'>
                                <div className='productLeft'>
                                    <img className='productImage' alt='' src='https://i.ibb.co/M7CvpPy/800px-COLOURBOX6879563.jpg' />
                                </div>
                                <div className='productCenter'>
                                    <h3>Pizza Tonno 26cm </h3>
                                    <p> tomato sauce, dought, tuna, onion</p>
                                </div>
                                <div className='productRight'>
                                    <span className='productSpan'> $ 9.90 </span>
                                    <select className='poductSelect'>
                                        <option className='poductOption'>1</option>
                                        <option>1</option>
                                        <option>1</option>
                                    </select>
                                </div>
                            </div>
                            <div className='productItem'>
                                <div className='productLeft'>
                                    <img className='productImage' alt='' src='https://i.ibb.co/M7CvpPy/800px-COLOURBOX6879563.jpg' />
                                </div>
                                <div className='productCenter'>
                                    <h3>Pizza Tonno 26cm </h3>
                                    <p> tomato sauce, dought, tuna, onion</p>
                                </div>
                                <div className='productRight'>
                                    <span className='productSpan'> $ 9.90 </span>

                                    <select className='poductSelect'>
                                        <option className='poductOption'>1</option>
                                        <option>1</option>
                                        <option>1</option>
                                    </select>
                                </div>

                            </div>
                            <div className='productItem'>
                                <div className='productLeft'>
                                    <img className='productImage' alt='' src='https://i.ibb.co/M7CvpPy/800px-COLOURBOX6879563.jpg' />
                                </div>
                                <div className='productCenter'>
                                    <h3>Pizza Tonno 26cm </h3>
                                    <p> tomato sauce, dought, tuna, onion</p>
                                </div>
                                <div className='productRight'>
                                    <span className='productSpan'> $ 9.90 </span>

                                    <select className='poductSelect'>
                                        <option className='poductOption'>1</option>
                                        <option>1</option>
                                        <option>1</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    ) : (
                        <div className='emptyCart'> <span className='emptyCartSpan'>Your Cart Is Empty</span></div>)

                }

            </div>
        </>
    )
}

export default Cart