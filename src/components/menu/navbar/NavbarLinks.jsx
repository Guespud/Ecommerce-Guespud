import React, { useContext} from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import CartSlider from "./CartSlider";
import { Store } from "../../../store";

const NavbarLinks = () => {

  const [data, setData] = useContext(Store);

    return (
        <MDBNavbar color="default-color" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">G-Shop</strong>
          </MDBNavbarBrand>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/Hombre">Hombre</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/Gorra">Gorra</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <CartSlider/>
              <span >{data.cantidad}</span>
            </MDBNavbarNav>
        </MDBNavbar>
    )
}

export default NavbarLinks;
