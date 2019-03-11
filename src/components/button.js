import React from 'react'

export default class Button extends React.Component {
  constructor(props) {
    console.log(props.name)

    super(props)
    this.state = {
      name: '',
    }
  }
  render (){
        console.log(this.props.name)
    return (

      <button
        type="submit"
        className="button"
        name={this.props.name}
        value={this.props.name}>
          {this.props.name}
      </button>
    )
  }
}
