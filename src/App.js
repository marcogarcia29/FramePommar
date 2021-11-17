import { useEffect } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login'
import FruitDetails from './FruitDetails';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Pomar Framework"
  }, [])
  return (
      <Router>
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
                  </Routes>
              </div>
        </div>
          
      </Router>
      
  );
}

export default App;
