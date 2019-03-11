import React from 'react'

export default class Avatar extends React.Component {
  render (){
    return (
      <img
        src={this.props.imagePath}
        width={this.props.size}
        className={this.props.style}/>
    )
  }
}
