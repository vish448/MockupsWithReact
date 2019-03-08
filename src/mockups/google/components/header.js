import React from 'react'

import '../css/google.css'

export default class Header extends React.Component {
  render (){
    return (
      <header className="header">
        <div className="leftNav">
          <ul>
            <li>About</li>
            <li>Store</li>
          </ul>
        </div>
        <div className="rightNav">
          <ul>
            <li>Gmail</li>
            <li>Images</li>
            <li>Avatar</li>
          </ul>
        </div>
      </header>
    )
  }
}
