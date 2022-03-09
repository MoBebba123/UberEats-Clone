import React from 'react';
import '../../pages/homePage/homePage.css';
const Backdrop = ({cart,closeCart}) => {
  return(
      <div className={cart? 'backdrop backdrop--open' : 'backdrop'} onClick={closeCart}>
          <div className='buttonContainer'></div>
      </div>
  )
};

export default Backdrop;
