import { useState, useContext } from "react";
import { Store } from "../../../store";
import { useHistory } from "react-router-dom";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBadge,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import CountItem from "../../body/itemCard/CountItem";

const ProductDetail = ({ item, Stock }) => {
  const history = useHistory();
  const [data, setData] = useContext(Store);
  const [counter, setCounter] = useState(0);

  const onAdd = () => {
    setData({
      ...data,
      cantidad: data.cantidad + counter,
      items: [...data.items, item],
    });
    history.push("/cart");
    // alert(`Agregaste ${counter} productos al carrito`);
  };

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("0 es el valor minimo");
    }
  };

  return (
    <>
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          {item.title}
        </h2>
        {/* <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p> */}
        <MDBRow>
          <MDBCol lg="12" md="6" className="mb-lg-0 mb-4">
            <MDBCard className="align-items-center">
              <MDBCardImage
                src={item.img}
                top
                alt="sample photo"
                overlay="white-slight"
              />
              <MDBCardBody className="text-center">
                <a href="#!" className="grey-text">
                  <h5>Shirt</h5>
                </a>
                <h5>
                  <strong>
                    <a href="#!" className="dark-grey-text">
                      {item.title}{" "}
                      <MDBBadge pill color="danger">
                        NEW
                      </MDBBadge>
                    </a>
                  </strong>
                </h5>
                <h4 className="font-weight-bold blue-text">
                  <strong>${item.price}</strong>
                </h4>
                {/* <CountItem /> */}
                <MDBRow center>
                  <div className="def-number-input number-input">
                    <button
                      onClick={handleSubtract}
                      className="minus"
                      disabled={counter === 0 ? "disabled" : null}
                    ></button>
                    <input
                      className="quantity"
                      name="quantity"
                      value={counter}
                      onChange={() => console.log("change")}
                      type="number"
                    />
                    <button
                      onClick={handleAdd}
                      className="plus"
                      disabled={counter === Stock ? "disabled" : null}
                    ></button>
                  </div>
                </MDBRow>
                <MDBBtn
                  color="default"
                  onClick={onAdd}
                  disabled={counter === 0 ? "disabled" : null}
                >
                  <MDBIcon icon="tshirt" className="mr-1" /> Agregar Al Carrito
                </MDBBtn>
                <br />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </>
  );
};

export default ProductDetail;
