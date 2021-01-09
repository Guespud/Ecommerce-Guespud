import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css"; 
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBIcon,
} from "mdbreact";

const HomeList = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        ¡ Nuestros productos !
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        manejamos estilos unicos para que seas unico con tu prenda manejamos
        colecciones de 3 prendas por talla para que pocas personas tenga tu
        prenda y asi sea mas exclusivo para ti.
      </p>
      <MDBRow>
        <MDBCol lg="2" md="6" className="mb-lg-0 mb-4"></MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    HOMBRE <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="2" md="6" className="mb-lg-0 mb-4"></MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    MUJER <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="2" md="6" className="mb-lg-0 mb-4"></MDBCol>
      </MDBRow>
    </section>
  );
};

export default HomeList;
