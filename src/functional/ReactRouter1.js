import React from 'react'

const ReactRouter1 = props => (
  <div>
    ReactRouter {props.match.params.id}
    {console.log(props)}
  </div>
)

export default ReactRouter1
