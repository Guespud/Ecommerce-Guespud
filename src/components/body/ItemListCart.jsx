import React, { useState,useEffect } from "react";
import { MDBRow, MDBCol } from "mdbreact";
import ItemCard from "./itemCard/ItemCard";

const ItemListCard = () => {
  const [items, setItems] = useState([]);

  const products = [
    {
      Imagen:
        "https://i.pinimg.com/originals/60/de/0a/60de0a084a7490cf91ba6ddae0e070c7.jpg",
      Caterogia: "Camiseta",
      Estilo: "Camiseta",
      Valor: "$ 120.000",
      Stock: 5,
      Id:1,
    },
    {
      Imagen:
        "https://i.pinimg.com/originals/60/de/0a/60de0a084a7490cf91ba6ddae0e070c7.jpg",
        Caterogia: "Camiseta",
      Estilo: "Camiseta",
      Valor: "$ 120.000",
      Stock: 2,
      Id:2,
    },
    {
      Imagen:
        "https://i.pinimg.com/originals/60/de/0a/60de0a084a7490cf91ba6ddae0e070c7.jpg",
        Caterogia: "Camiseta",
      Estilo: "Camiseta",
      Valor: "$ 120.000",
      Stock: 5,
      Id:3,
    },
    {
      Imagen:
        "https://i.pinimg.com/originals/60/de/0a/60de0a084a7490cf91ba6ddae0e070c7.jpg",
        Caterogia: "Camiseta",
      Estilo: "Camiseta",
      Valor: "$ 120.000",
      Stock: 5,
      Id:4,
    },
  ];

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 100);
  });

  const getProducstFromDB = async () => {
    try {
      const result = await getProducts;
      setItems(result);
    } catch (error) {
      alert("No podemos mostrar los productos en este momento");
    }
  };

  useEffect(() => {
    getProducstFromDB();
}, [])

  return (
    <section className="text-center my-5">
      {items.length ? 
        <>
          {/* <h2 className="h1-responsive font-weight-bold text-center my-5">
            Nuestros Productos
          </h2> */}
          <MDBRow>
            {items.map((item, index) => (
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                <ItemCard
                  key={index}
                  Imagen={item.Imagen}
                  Caterogia={item.Caterogia}
                  Estilo={item.Estilo}
                  Valor={item.Valor}
                  Stock={item.Stock}
                  Id={item.Id}
                />
              </MDBCol>
            ))}
          </MDBRow>
        </>
      : (
        <p className="cargando">Cargando items...</p>
      )}
    </section>
  );
};

export default ItemListCard;
