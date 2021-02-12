import { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/body/footer/Footer";
import ItemListCard from "./components/body/ItemListCart";
import NavbarHome from "./components/menu/navbar/NavbarHome";
import Hombre from "./components/routes/Hombre";
import Error404 from "./components/routes/Error404";
import NavbarLinks from "./components/menu/navbar/NavbarLinks";
import Detail from "./components/routes/detail/Detail";
import { Store } from "./store";
import Cart from "./components/Cart";
import Gorras from "./components/routes/Gorras";

function App() {
  const [data, setData] = useState({
    items: [],
    cantidad: 0,
    freeShipping: 4000,
    cuotas: 3,
    precioTotal: 0,
  });

  return (
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <NavbarHome />
            <hr />
            <ItemListCard />
          </Route>
          <Route path="/Hombre">
            <NavbarLinks />
            <Hombre />
          </Route>
          <Route path="/Gorras">
            <NavbarLinks />
            <Gorras />
          </Route>
          <Route path="/cart">
          <NavbarLinks />
            <Cart/>
          </Route>
          <Route exact path="/:category_name/:id">
            <NavbarLinks />
            <Detail />
          </Route>
          <Route path="*">
            <NavbarLinks />
            <Error404 />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
