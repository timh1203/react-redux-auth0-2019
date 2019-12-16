import React, { Component } from 'react'

class Forms1 extends Component {
  state = {
    value: ''
  }

  onChange = e => {
    this.setState({ value: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    console.log(this.state.value)
  }

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <form onSubmit={this.onSubmit}>
          <label>Name</label>
          <input id="name" onChange={this.onChange} type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Forms1
