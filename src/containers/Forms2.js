import React, { Component } from 'react'

class Forms2 extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    // This is legacy syntax which we might see in older codebases
  }

  state = {
    value: ''
  }

  onChange(e) {
    this.setState({ value: e.target.value })
  }

  onSubmit(e) {
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

export default Forms2
