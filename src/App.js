import React, {Component} from 'react';
import './App.css';
//bootstrap include
import 'bootstrap/dist/css/bootstrap.min.css';

//navbar imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

//card imports 
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns'

//pages import
import Login from "./pages/Login"
import MinhasHoras from "./pages/MinhasHoras"

import { BrowserRouter, Switch, Route} from "react-router-dom"


function App(props) {
  return (
    <div>
      <header>
        <link></link>
      </header>
      <main>
        Conteudo
      </main>
      <footer>
        Made with love s2
      </footer>
    </div>
  );
}

export default App;