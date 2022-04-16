import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Header';
import RoutesComp from './components/home/routes/RoutesComp';

function App() {
  return (
    <div className="app">
      {/* <Home/> */}
      <RoutesComp/>
    </div>
  );
}

export default App;
