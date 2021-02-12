import React from 'react';
import Cart from '../../Cart';
import './SidebarCart.css';

const SidebarCart = ({show, action}) => {
    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
        <button onClick={action}>Cerrar Cart</button>
        <Cart/>
    </div>
    )
}

export default SidebarCart;
