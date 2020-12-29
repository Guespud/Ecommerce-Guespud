import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/body/footer/Footer";
import ItemListCard from "./components/body/ItemListCart";
import Navbar from "./components/menu/navbar/Navbar";
import Camisetas from "./components/routes/Camisetas";
import Error404 from "./components/routes/Error404";
import Contactos from "./components/routes/Contactos";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>

      <Switch>
        <Route exact path="/">
          <ItemListCard />
          <Footer />
        </Route>
        <Route path="/Camisetas">
          <Camisetas />
        </Route>
        <Route path="/Contactos">
          <Contactos/>
        </Route>
        <Route path="*">
          <Error404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
