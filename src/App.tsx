import React from 'react';
// import logo from './logo.svg';
import Counter from './Counter';
import Welcome from './Welcome';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Welcome />
      </header>
      <div><Counter /></div>
    </div>
  );
}

export default App;
