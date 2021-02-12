import React, { useContext } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBView,
} from "mdbreact";
import NavbarBackground from "../../../assets/image/navbar.png";
import CartSlider from "./CartSlider";
import { Store } from "../../../store";

const NavbarHome = () => {
  const [data, setData] = useContext(Store);

  return (
    <div>
      <header>
        <MDBView src={NavbarBackground}>
          <MDBNavbar dark expand="md">
            <MDBContainer>
              <MDBNavbarBrand href="/">
                <strong>G-shop</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler />
              <MDBCollapse navbar>
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
                  {/* Carrito */}
                  <CartSlider />
                  <span >{data.cantidad}</span>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </MDBView>
      </header>
    </div>
  );
};

export default NavbarHome;
