import React, { Component } from 'react'
import './App.css'

import Header from './components/header'
import Nav from './components/nav'

import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome,faBolt,faBell,faEnvelope,faUserCircle,faSearch,faMapMarker,faBuilding,faCalendar } from '@fortawesome/free-solid-svg-icons'


import Home from './mockups/home'
import Google from './mockups/google/google'
import Twitter from './mockups/twitter/twitter'


class App extends Component {
  render() {
    library.add(fab,faHome,faBolt,faBell,faEnvelope,faUserCircle,faSearch,faMapMarker,faBuilding,faCalendar)

    return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <Route exact path ="/" component = {Home} />
            <Route path="/google" component = {Google} />
            <Route path="/twitter" component = {Twitter} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
