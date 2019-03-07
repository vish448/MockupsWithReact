import React, { Component } from 'react'
import './App.css'

import Header from './components/header'
import Nav from './components/nav'

import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import Home from './mockups/home'
import Google from './mockups/google'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <Nav />
            <Route exact path ="/" component = {Home} />
            <Route path="/google" component = {Google} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
