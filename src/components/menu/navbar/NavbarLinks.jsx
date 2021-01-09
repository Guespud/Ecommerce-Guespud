import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import CartSlider from "./CartSlider";

class NavbarLinks extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
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
                <MDBNavLink to="/Mujer">Mujer</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <CartSlider/>
            </MDBNavbarNav>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarLinks;
