import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css';
import { Header } from './components/header/Header';
import { Routes } from './routes';

const headerLinks = [
  {
    title: "home",
    path: ""
  },
  {
    title: "contact",
    path: "contact"
  },
  {
    title: "login",
    path: "login"
  },
]

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header title="My Title" links={headerLinks} />
        <Routes />
      </div>  
    </BrowserRouter>
  );
}

export default App;
