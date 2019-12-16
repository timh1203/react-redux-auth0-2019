import React from 'react'

const ConditionalRendering3 = () => (results())

const results = () => {
  if (true) {
    return (<div>Condition 5</div>)
  }
  else {
    return (<div>Condition 6</div>)
  }

  // THIS DIDN'T WORK
  // if (true) { (<div>Condition 5</div>) }
  // else { (<div>Condition 6</div>) }
}

export default ConditionalRendering3
