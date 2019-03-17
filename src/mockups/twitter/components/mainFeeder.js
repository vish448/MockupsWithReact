import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import vishDP from '../../../images/vishangsoni.jpg'


export default class Feeder extends React.Component {
  render (){
    return (
      <div id="feederContainer">
        <div id="feederContent">
          <div id="tweets">
            <div id="tweetContent">
              <div id="userAvatar">
                <img src= {vishDP} />
              </div>
              <div id="userInfo">
                <span id="userName">Vishang Soni</span> <span class="tweetHandle">@vishangsoni</span> <span class="date"> 3 Oct 2018</span>
              </div>

              <div id="tweetInfo">
                <p>This is a tweet. Whatever I am posting will be showing in here</p>
              </div>
              <div id="tweetAnalysis">
                <FontAwesomeIcon icon="comment" className="analysisIcons"/>
                <FontAwesomeIcon icon="retweet" className="analysisIcons"/>
                <FontAwesomeIcon icon="heart" className="analysisIcons" />
                <FontAwesomeIcon icon="chart-pie" className="analysisIcons" />
              </div>
            </div>
          </div>
          <hr />

          <div id="tweets">
            <div id="tweetContent">
              <div id="userAvatar">
                <img src= {vishDP} />
              </div>
              <div id="userInfo">
                <span id="userName">Vishang Soni</span> <span class="tweetHandle">@vishangsoni</span> <span class="date"> 3 Oct 2018</span>
              </div>

              <div id="tweetInfo">
                <p>This is a tweet. Whatever I am posting will be showing in here</p>
              </div>
              <div id="tweetAnalysis">
                <FontAwesomeIcon icon="comment" className="analysisIcons"/>
                <FontAwesomeIcon icon="retweet" className="analysisIcons"/>
                <FontAwesomeIcon icon="heart" className="analysisIcons" />
                <FontAwesomeIcon icon="chart-pie" className="analysisIcons" />
              </div>
            </div>
          </div>
          <hr />
          
        </div>
      </div>
    )
  }
}
