import { useEffect } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import logo from './logo.svg';
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
              <Home />
          </div>
        </div>
      </Router>
      
  );
}

export default App;
