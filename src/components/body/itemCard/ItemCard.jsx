import React,{useState}from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBadge,
  MDBBtn,
  MDBIcon,
  MDBRow,
} from "mdbreact";

import './itemCard.css';

const ItemCard = ({ Imagen, Nombre, Estilo, Valor }) => {


  const [counter, setCounter] = useState(0); //return[]

  //handleAdd
  const handleAdd = () => {
      setCounter(counter + 1);
  }

  const handleSubtract = () => {
      if (counter > 0) {
          setCounter(counter - 1);
      } else {
          alert('0 es el valor minimo');
      }
  }


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
        <MDBRow>
        <div className="def-number-input number-input">
          <button onClick={handleSubtract} className="minus" disabled={counter === 0 ? 'disabled' : null } ></button>
          <input className="quantity" name="quantity" value={counter} onChange={()=> console.log('change')}
          type="number" />
          <button onClick={handleAdd} className="plus"></button>
        </div>
        </MDBRow>
        <MDBBtn color="default">
        <MDBIcon icon="tshirt" className="mr-1" /> Agregar Al Carrito
      </MDBBtn>
      </MDBCard>
    </div>
  );
};

export default ItemCard;
