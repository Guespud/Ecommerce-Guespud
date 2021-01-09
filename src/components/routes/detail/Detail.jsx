import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../../../products";
import ProductDetail from "./ProductDetail";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = new Promise((resolve, reject) => {
    const selectedProduct = products.filter((item) => item.id === parseInt(id));
    resolve(selectedProduct[0]);
  });

  useEffect(() => {
    getProduct
      .then((response) => setProduct(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {product ? (
        <div className="container">
                <br/>
          <MDBBreadcrumb light color="default">
            <MDBBreadcrumbItem><Link to={`/${product.category}`}>
                {product.category.split("-").join(" ")}
              </Link></MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>{product.title}</MDBBreadcrumbItem>
          </MDBBreadcrumb>

          <ProductDetail item={product} Stock={product.Stock}/>
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
    </>
  );
};

export default Detail;
