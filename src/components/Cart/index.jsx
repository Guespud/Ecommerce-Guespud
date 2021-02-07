import { useContext, useState, useEffect } from "react";
import { Store } from "../../store";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBTooltip,
} from "mdbreact";

const Cart = () => {
  const [data, setData] = useContext(Store);
  const [prods, setProds] = useState([]);

  useEffect(() => {
    if (data.items.length) {
      const productos = JSON.stringify(data.items);
      localStorage.setItem("productos", productos);
    }

    if (localStorage.getItem("productos")) {
      setProds(JSON.parse(localStorage.getItem("productos")));
    } else {
      setProds(data.items);
    }
  }, [data.items]);

  console.log(prods,"donde esta la imagen");

  return (
    <>
      <h1>Estás en el cart</h1>
      {prods.map((item) => (
        <>
          <MDBCard narrow ecommerce className="mb-2">
            <MDBCardImage
              src={item.data.img}
              height="200"
            />
            <MDBCardBody cascade>
              <MDBCardTitle center>
                <strong>
                  <a>{item.data.title}</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>Cantidad = {item.cantidad}</MDBCardText>
              <span className="float-left">Unidad : <br/> ${item.data.price}</span>
              <br/>
              <br/>
              <span className="float-left">
                Total : <br/> ${item.data.price * item.cantidad}
              </span>
            </MDBCardBody>
          </MDBCard>
        </>
      ))}
    </>
  );
};

export default Cart;
