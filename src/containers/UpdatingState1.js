import React, { Component } from 'react'

class UpdatingState1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stateprop1: "Our Initial State",
      stateprop2: 5
    }
  }

  changeState = () => {
    // Method 1 of updating state
    this.setState((prevState, props) => ({
      stateprop2: prevState.stateprop2 + 1
    }))

    // Method 2 of updating state
    this.setState({ stateprop2: this.state.stateprop2 + 1 })
  }

  render() {
    return (
      <div>
        <p>
          stateprop2: {this.state.stateprop2}
        </p>
        <button onClick={() => this.changeState()}>Change State</button>
      </div>
    )
  }
}

export default UpdatingState1
