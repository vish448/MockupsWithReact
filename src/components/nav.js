import React from 'react'

import {
  Link,
} from 'react-router-dom'

export default class Nav extends React.Component {
  render (){
    return (
      <nav id="main-nav">
        <Link to="/google" className='App-link'>Google</Link>
        <Link to="/twitter" className="App-link">Twitter</Link>
      </nav>
    )
  }
}
