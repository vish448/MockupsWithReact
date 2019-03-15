import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class PersonalInfo extends React.Component {
  render (){
    return (
      <div id="personalInfo">
        <div id="name">Vishang Soni<br/><span id="handle">@vishangsoni</span></div>
        <div id="designation" className="profileInfo">Front end developer</div>
        <div id="location" className="profileInfo">
          <FontAwesomeIcon icon="map-marker" /> Ontaria, Canada
        </div>
        <div id="company" className="profileInfo">
          <FontAwesomeIcon icon="building" /> studio48.xyz
        </div>
        <div id="joined" className="profileInfo">
          <FontAwesomeIcon icon="calendar" /> Joined June 2009
        </div>
      </div>
    )
  }
}
