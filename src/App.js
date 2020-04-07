import React from 'react';
import Products from './Screens/Products';
import About from './Screens/About';
import Contacts from './Screens/Contacts';
import './App.css';
import { Router, Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <ul id="navigator">
            <li>
              <Link to="/about" style={{ textDecoration: 'none', color: 'white'}}>About</Link>
            </li>
            <li>
              <Link to="/products" style={{ textDecoration: 'none', color: 'white'}}>Products</Link>
            </li>
            <li>
              <Link to="/contacts" style={{ textDecoration: 'none', color: 'white'}}>Contacts</Link>
            </li>
          </ul>
        </header>
        <div>
          <Route exact path="/about" component={About}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/contacts" component={Contacts}/>
        </div>
      </div>
  );
}

export default App;
