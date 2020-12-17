import './App.css';
import Footer from './components/body/footer/Footer';
import ItemListCard from './components/body/ItemListCart';
import Navbar from './components/menu/navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <ItemListCard/>
    <Footer/>
    </div>
  );
}

export default App;
