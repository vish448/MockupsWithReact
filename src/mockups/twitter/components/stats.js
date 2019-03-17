import React from 'react'

import {Link} from 'react-router-dom'

export default class Stats extends React.Component {
  render (){
    return (
      <div id="stats">
          <div id="span20"></div>
          <div id="statNav">
            <ul>
              <li>
                <Link to="/tweet">Tweet<br/>20</Link>
              </li>
              <li>
                <Link to="/follwing">Following<br/>22</Link>
              </li>
              <li>
                <Link to="/followers">Followers<br/>10</Link>
              </li>
              <li>
                <Link to="/likes">Likes<br/>74</Link>
              </li>
              <li>
                <Link to="/lists">Lists<br/>4</Link>
              </li>
              <li>
                <Link to="/moments">Moments<br/>20</Link>
              </li>
            </ul>
            <button className="clear editProfile">Edit Profile</button>
          </div>
      </div>
    )
  }
}
