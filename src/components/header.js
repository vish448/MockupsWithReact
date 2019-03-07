import React from 'react'
import logo from '../logo.svg'

export default class Header extends React.Component {
  render (){
    return (
      <header className="App-header">
        <h2><img src={logo} className="App-logo" alt="logo" />Mockups with react</h2>
      </header>
    )
  }
}
