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
    title: "John",
    path: "profile/John"
  }
]

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header title="JS React" links={headerLinks} />
        <Routes />
      </div>  
    </BrowserRouter>
  );
}

export default App;
