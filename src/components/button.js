import React from 'react'

export default class Button extends React.Component {
  render (){
    return (
      <button
        type="submit"
        className={this.props.style}
        name={this.props.name}
        value={this.props.name}>
          {this.props.name}
      </button>
    )
  }
}
