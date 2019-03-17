import React from 'react'

import vishDP from '../../../images/vishangsoni.jpg'

export default class DisplayPic extends React.Component {
  render (){
    return (
      <div id="displayPic">
        <img src= {vishDP} />
      </div>
    )
  }
}
