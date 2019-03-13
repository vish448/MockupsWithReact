import React, { Component } from 'react'

import TopNavigation from './components/topNavigation'
import ProfilePic from './components/profilePic'
import Stats from './components/stats'
import PersonalInfo from './components/personalInfo'
import Feeder from './components/mainFeeder'
import Sidebar from './components/sidebar'
import DisplayPic from './components/displayPic'

export default class Twitter extends Component {
  render() {
    return (
      <div id="twitterMockup">
        <TopNavigation />
        <ProfilePic />
        <div id="statsContainer">
          <div id="statContent">
            <DisplayPic />
            <Stats />
          </div>
        </div>
        <div id="mainContainer">
          <div id="mainContent">
            <PersonalInfo />
            <Feeder />
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}
