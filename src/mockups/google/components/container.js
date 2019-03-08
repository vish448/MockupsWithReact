import React from 'react'

import googleLogo from '../../../images/googleLogo.png'
import SearchBar from '../../../components/searchBar'
import Button from '../../../components/button'


export default class Container extends React.Component {
  render (){
    return (
      <div className="container">
        <div className="logo">
          <img src={googleLogo} alt="googleLogo" width="400" />
        </div>
        <div className="searchBar">
          <SearchBar />
        </div>
        <div className="buttons">
          <div className="buttonContainer">
            Button
          </div>
        </div>
      </div>
    )
  }
}
