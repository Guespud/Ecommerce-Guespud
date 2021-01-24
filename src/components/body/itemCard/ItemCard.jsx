import React from "react";
import {Link} from 'react-router-dom';
import { MDBCard, MDBCardImage, MDBCardBody, MDBBadge,MDBBtn,MDBIcon } from "mdbreact";

import "./itemCard.css";
import CountItem from "./CountItem";

const ItemCard = ({ Imagen, category, Estilo, Valor,Stock,Id}) => {
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
          {/* <a href="#!" className="grey-text">
            <h5>{Nombre}</h5>
          </a> */}
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
        <MDBBtn color="default" to={`/${category}/${Id}`}>
        <Link to={`/${category}/${Id}`}>Ver detalle</Link> <MDBIcon icon="hand-peace" className="ml-1" />
      </MDBBtn>
        {/* <CountItem Stock={Stock} Imagen={Imagen} Nombre={Nombre} Valor={Valor}/> */}
      </MDBCard>
    </div>
  );
};

export default ItemCard;
