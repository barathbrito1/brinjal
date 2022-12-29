import './App.css';
import Registration from './Pages/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import Card from './Pages/Card';
import Header from './Component/Header';
import Product from './Pages/Product';
import NewProduct from './Pages/NewProduct';


function App() {
  return (
    <div className="App">
      <Header />
      
     <Router>
      <Switch>
          <Route exact path="/"><Home /></Route> 
          <Route path="/Registration"><Registration /></Route>
          <Route path="/SignIn"><SignIn /></Route>
          <Route path="/Card"><Card /></Route>
          <Route exact path="/Product"><Product /></Route>
          <Route exact path="/NewProduct"><NewProduct /></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
