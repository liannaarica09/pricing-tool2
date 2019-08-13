import React from 'react';
import Tabs from './components/Tabs'
import './App.css';

function App() {
  return (
    <div className="content">
      <header>
        <div className="bubbles">
          <h1>Pricing Tool</h1>
        </div>
      </header>
      <div className="container">
        <Tabs></Tabs>
      </div>
    </div>
  );
}

export default App;
