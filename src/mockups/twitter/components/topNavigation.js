import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {Link} from 'react-router-dom'

import '../css/twitter.css'
export default class TopNavigation extends React.Component {
  render (){
    return (
      <div id="topNavigationContainer">
        <div id="topNavigationContent">
          <div className="leftNav">
            <Link to="/twitter">
              <FontAwesomeIcon icon="home" /> Home
            </Link>
            <Link to="/moments">
              <FontAwesomeIcon icon="bolt" /> Moments
            </Link>
            <Link to="/notification">
              <FontAwesomeIcon icon="bell" /> Notifications
            </Link>
            <Link to="/messages">
              <FontAwesomeIcon icon="envelope" /> Messages
            </Link>
          </div>
          <div className="logo">
            <Link to="/twitter" className="App-link">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </Link>
          </div>
          <div className="rightNav">
            <input type="text" className="search" placeholder="Search Twitter" /><FontAwesomeIcon icon="search" className="searchIcon" />
            <FontAwesomeIcon icon="user-circle" className="avatar" />
          <button>Tweet</button>
          </div>
        </div>
      </div>
    )
  }
}
