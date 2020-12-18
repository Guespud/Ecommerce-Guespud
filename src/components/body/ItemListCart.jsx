import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import ItemCard from "./itemCard/ItemCard";

const ItemListCard = () => {
  const products = [
    {
      Imagen:
        "https://i.pinimg.com/originals/60/de/0a/60de0a084a7490cf91ba6ddae0e070c7.jpg",
      Nombre: "Camiseta",
      Estilo: "Camiseta",
      Valor: "$ 120.000",
      Stock: 5,
    },
    {
      Imagen:
        "https://i.pinimg.com/originals/60/de/0a/60de0a084a7490cf91ba6ddae0e070c7.jpg",
      Nombre: "Camiseta",
      Estilo: "Camiseta",
      Valor: "$ 120.000",
      Stock: 5,
    },
    {
      Imagen:
        "https://i.pinimg.com/originals/60/de/0a/60de0a084a7490cf91ba6ddae0e070c7.jpg",
      Nombre: "Camiseta",
      Estilo: "Camiseta",
      Valor: "$ 120.000",
      Stock: 5,
    },
    {
      Imagen:
        "https://i.pinimg.com/originals/60/de/0a/60de0a084a7490cf91ba6ddae0e070c7.jpg",
      Nombre: "Camiseta",
      Estilo: "Camiseta",
      Valor: "$ 120.000",
      Stock: 5,
    },
  ];

  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Nuestros Productos
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Nuestras prendas tienen disponibilidad de pocas tallas por estilo ya que
        nuestra idea es manejar prendas exclusivas.
      </p>
      <MDBRow>
        {products.map((item, index) => (
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <ItemCard
              key={index}
              Imagen={item.Imagen}
              Nombre={item.Nombre}
              Estilo={item.Estilo}
              Valor={item.Valor}
              Stock={item.Stock}
            />
          </MDBCol>
        ))}
      </MDBRow>
    </section>
  );
};

export default ItemListCard;
