import React from 'react'
import vishDP from '../../../images/vishangsoni.jpg'

export default class Sidebar extends React.Component {
  render (){
    return (
      <div id="sidebar">
        <div id="whoToFollow">
          <header>
            <h1>Who to follow</h1>
            <a href='#'>View all</a>
          </header>
          <body>
            <div id="userAvatar">
              <img src= {vishDP} />
            </div>
            <div id="userInfo">
              <span id="userName">Vishang Soni</span>
            </div>
            <button className="clear followProfile">Follow</button>

          </body>
        </div>

      </div>
    )
  }
}
