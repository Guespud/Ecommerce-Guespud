import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
import { getFirestore } from "../../../firebase";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const db = getFirestore();

  console.log(id,"este es el id");

  useEffect(() => {
    db.collection('productos').doc(id).get()
      .then(doc => {
        if(doc.exists) {
          console.log("entro al if que si existe");
          setProduct({ id: doc.id, data: doc.data() });
        }
      })
      .catch(e => console.log(e));
  }, []);

  console.log(product,"esta es la data que esta fallando");

  return (
    <>
      {product ? (
        <div className="container">
          <br />
          <MDBBreadcrumb light color="default">
            <MDBBreadcrumbItem>
              <Link to={`/${product.data.category}`}>{product.data.category.split("-").join(" ")}</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>{product.data.title}</MDBBreadcrumbItem>
          </MDBBreadcrumb>

          <ProductDetail item={product} Stock={product.data.Stock} />
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
    </>
  );
};

export default Detail;
