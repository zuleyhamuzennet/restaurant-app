
import './App.css';
import ProductList from './components/ProductList';
import { BrowserRouter as Router ,Link,Route} from "react-router-dom";
import Detail from './components/Detail';
import Header from "./components/Header";


function App() {
    return (
        <Router>
            <div className="main-wrapper">
                <header>
                    <Header/>
                </header>
                <div className="ui raised very padded text container segment" style={{backgroundColor:"#f7e5de"}}>

                    <Route exact path="/" component={ProductList}/>

                </div>
            </div>
        </Router>
    );
}

export default App;
