import React, { Component } from 'react'

class Container1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stateprop1: "Our Initial State",
      stateprop2: 5
    }
  }

  render() {
    return (
      <div>
        <p>Container State 1</p>
        <p>
          nickname: {this.props.nickname}
        </p>
        <p>
          stateprop1: {this.state.stateprop1}
        </p>
        <p>
          stateprop2: {this.state.stateprop2}
        </p>
      </div>
    )
  }
}

export default Container1
