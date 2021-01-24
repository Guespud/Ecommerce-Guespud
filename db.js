const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDQMDtElX_dRZLO7Iic_L7kCynJjpJXdx4",
  authDomain: "ecommerce-gshop.firebaseapp.com",
  projectId: "ecommerce-gshop",
});

var db = firebase.firestore();

var productos = [
  {
    "id": 1,
    "category": "camiseta",
    "title": "Camiseta OverSixe",
    "description": "",
    "img": "https://i.pinimg.com/originals/60/de/0a/60de0a084a7490cf91ba6ddae0e070c7.jpg",
    "price": 45000,
    "outstanding": "",
    "discount": "",
    "Stock": 12,
  },
  {
    "id": 2,
    "category": "camiseta",
    "title": "Camiseta Altervative",
    "description": "",
    "img": "https://cdn.shopify.com/s/files/1/0090/4953/8617/products/amarillo_atras_1024x1024.png?v=1537332429",
    "price": 45000,
    "outstanding": "",
    "discount": "",
    "Stock": 12,
  },
  {
    "id": 3,
    "category": "camiseta",
    "title": "Camiseta colorFull",
    "description": "",
    "img": "https://www.dhresource.com/0x0/f2/albu/g8/M00/4C/79/rBVaVFySnCWAFe1zAAGPDV-p7RY853.jpg",
    "price": 45000,
    "outstanding": "",
    "discount": "",
    "Stock": 12,
  },
  {
    "id": 4,
    "category": "camiseta",
    "title": "Camiseta Hardcore",
    "description": "",
    "img": "https://ae01.alicdn.com/kf/HTB1fYjeKVXXXXXUXVXXq6xXFXXX6/2019-marca-de-ropa-tri-ngulo-ojos-de-Lycra-de-manga-corta-blanco-de-los-hombres.jpg",
    "price": 45000,
    "outstanding": "",
    "discount": "",
    "Stock": 12,
  }
];

productos.forEach((obj) => {
  db.collection("productos")
    .add({
      id: obj.id,
      category: obj.category,
      title: obj.title,
      description: obj.description,
      img: obj.img,
      price: obj.price,
      outstanding: obj.outstanding,
      discount: obj.discount,
      Stock: obj.Stock
    })
    .then((docRef) => {
      console.log("Producto registrado con ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error al agregar un documento: ", error);
    });
});
