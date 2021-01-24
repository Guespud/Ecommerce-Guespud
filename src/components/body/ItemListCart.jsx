import React, { useState, useEffect,memo} from "react";
import { MDBRow, MDBCol } from "mdbreact";
import ItemCard from "./itemCard/ItemCard";
import { getFirestore } from "../../firebase";

const ItemListCard = () => {
  const [items, setItems] = useState([]);

  const db = getFirestore();

  const GetProducstFromDB = () => {
    db.collection("productos")
      .where("outstanding", "==", true)
      .get()
      .then((docs) => {
        let arr = [];
        docs.forEach((doc) => {
          console.log(doc)
          arr.push({ id: doc.id, data: doc.data() });
        });

        setItems(arr);
      })
      .catch((e) => console.log(e));
    };

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
                    key={index}
                    Imagen={item.img}
                    category={item.category}
                    Estilo={item.title}
                    Valor={item.price}
                    Stock={item.Stock}
                    Id={item.Id}
                  />
                </MDBCol>
              ))}
            </MDBRow>
          </>
        ) : (
          <p className="cargando">Cargando items...</p>
        )}
      </section>
    )
};

export default memo(ItemListCard);
