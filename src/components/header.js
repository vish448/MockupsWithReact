import React from 'react'
import logo from '../logo.svg'
import Nav from './nav'

export default class Header extends React.Component {
  render (){
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /><h2>Mockups with react</h2>
        <Nav />
      </header>
    )
  }
}
