import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarBackground from '../../assets/image/navbar.png';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <MDBView src={NavbarBackground}>
            <Router>
              <MDBNavbar dark expand="md">
                <MDBContainer>
                  <MDBNavbarBrand href="/">
                    <strong>G-shop</strong>
                  </MDBNavbarBrand>
                  <MDBNavbarToggler onClick={this.onClick} />
                  <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav left>
                      <MDBNavItem active>
                        <MDBNavLink to="#">Home</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">Tshirts</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">contactos</MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>
            </Router>
          </MDBView>
        </header>

        <main>
          {/* <MDBContainer className="text-center my-5">
            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer> */}
        </main>
      </div>
    );
  }
}

export default Navbar;