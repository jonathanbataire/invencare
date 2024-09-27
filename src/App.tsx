import React from 'react';
import logo from './assets/logo.svg';
//import { Counter } from '@components/Counter';
import { Login } from '@components/Login';
import '@styles/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
      </header>
    </div>
  );
}

export default App;
