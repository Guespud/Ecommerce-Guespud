import React,{useState}from "react";
import SidebarCart from "./SidebarCart";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBIcon } from "mdbreact";

const CartSlider = () => {
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <MDBIcon icon="tshirt" size="2x" className="white-text pr-3" onClick={openCart} />
      <SidebarCart show={showCart} action={openCart}/>
    </>
  );
};

export default CartSlider;
