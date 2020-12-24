import React from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";

import "./itemCard.css";
import CountItem from "./CountItem";

const ItemCard = ({ Imagen, Nombre, Estilo, Valor,Stock }) => {
  return (
    <div>
      <MDBCard className="align-items-center">
        <MDBCardImage
          src={Imagen}
          top
          alt="sample photo"
          overlay="white-slight"
        />
        <MDBCardBody className="text-center">
          <a href="#!" className="grey-text">
            <h5>{Nombre}</h5>
          </a>
          <h5>
            <strong>
              <a href="#!" className="dark-grey-text">
                {Estilo}{" "}
                <MDBBadge pill color="danger">
                  NEW
                </MDBBadge>
              </a>
            </strong>
          </h5>
          <h4 className="font-weight-bold green-text">
            <strong>{Valor}</strong>
          </h4>
        </MDBCardBody>
        <CountItem Stock={Stock} Imagen={Imagen} Nombre={Nombre} Valor={Valor}/>
      </MDBCard>
    </div>
  );
};

export default ItemCard;
