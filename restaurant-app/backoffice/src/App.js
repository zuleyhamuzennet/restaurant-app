import './App.css';
import AddProduct from './components/AddProduct';
import ProductList from "./components/ProductList";
import { BrowserRouter as Router ,Link,Route} from "react-router-dom";
import Header from "./components/Header";


function App() {

  return (
    <Router>
    <div className="main-wrapper">
    <header>
    <Header/>
    </header>
    <div className="ui raised very padded text container segment">

    <Route exact path="/add" component={AddProduct}/>
    <Route exact path="/list" component={ProductList}/>
      <Route exact path="/u" component={ProductList}/>

     <h2>
    <Link to="/add">Yeni Ürün Ekle</Link>
    </h2>
    <h2>
    <Link to="/list">Ürün Listesini Gör</Link>
    </h2>

    </div> 
    </div>
    </Router>
  );
}

export default App;
