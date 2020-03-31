import React from 'react';
import Products from './Screens/Products';

import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <ul id="navigator">
            <li>About</li>
            <li>Products</li>
            <li>Contacts</li>
          </ul>
        </header>
        <div>
          <Products />
        </div>
      </div>
  );
}

export default App;
