import React, { useState, useEffect, memo, useParams } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import ItemCard from "./itemCard/ItemCard";
import { getFirestore } from "../../firebase";

const ItemListCard = () => {
  // const { category_name } = useParams();
  const [items, setItems] = useState([]);
  const db = getFirestore();

  const GetProducstFromDB = () => {
    db.collection('productos').where("outstanding", "==", true).get()
      .then((docs) => {
        let arr = [];
        docs.forEach((doc) => {
          arr.push({ id: doc.id, data: doc.data() });
        });

        setItems(arr);
      })
      .catch((e) => console.log(e));
    };

  // useEffect(() => {
  //   if (category_name) {
  //     db.collection("productos")
  //       .where("category", "==", category_name)
  //       .get()
  //       .then((response) => {
  //         let arr = [];
  //         response.forEach((doc) => {
  //           arr.push({ id: doc.id, data: doc.data() });
  //         });

  //         setItems(arr);
  //       });
  //   }
  // }, [category_name]);

  useEffect(() => {
    GetProducstFromDB();
  }, []);

  return (
    <section className="ItemListCard text-center my-5">
      {items.length ? (
        <>
          {/* <h2 className="h1-responsive font-weight-bold text-center my-5">
            Nuestros Productos
          </h2> */}
          <MDBRow>
            {items.map((item, index) => (
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <ItemCard
                  key={item.data.id}
                  Imagen={item.data.img}
                  category={item.data.category}
                  Estilo={item.data.title}
                  Valor={item.data.price}
                  Stock={item.data.Stock}
                  Id={item.id}
                />
              </MDBCol>
            ))}
          </MDBRow>
        </>
      ) : (
        <p className="cargando">Cargando items...</p>
      )}
    </section>
  );
};

export default memo(ItemListCard);
