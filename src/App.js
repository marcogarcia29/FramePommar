import { useEffect, createContext, useState } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login'
import FruitDetails from './FruitDetails';
import './App.css';
import UserContext from './UserContext';
import CartItems from './CartItems';
import CartView from './CartView'

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [loggedUser, setLoggedUser] = useState({
    userName: "",
    isLoggedIn: false,
  });
  const [valor, setValor] = useState(0)

  useEffect(() => {
    document.title = "Pomar Framework"
  }, [])
  return (
      <Router>
        <UserContext.Provider
          value={{ carrinho, setCarrinho, loggedUser, setLoggedUser, valor, setValor}}
        >
        <div className="App">
          <Navbar />          
              <div className='content'>
                  <Routes>
                    <Route exact path="/"
                     element={<Home/>}>
                    </Route>
                    <Route path="/login"
                     element={<Login/>}>
                    </Route>
                    <Route path="/:fruitId"
                     element={<FruitDetails/>}>
                    </Route>
                    <Route path="/cartview"
                     element={<CartView/>}>
                    </Route>
                  </Routes>
              </div>
        </div>
        </UserContext.Provider>
      </Router>
  );
}

export default App;
