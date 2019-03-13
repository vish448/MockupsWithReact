import React, { Component } from 'react'
import './App.css'

import Header from './components/header'
import Nav from './components/nav'

import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import Home from './mockups/home'
import Google from './mockups/google/google'
import Twitter from './mockups/twitter/twitter'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <Route exact path ="/" component = {Home} />
            <Route path="/google" component = {Google} />
            <Route path="/twitter" component = {Twitter} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
