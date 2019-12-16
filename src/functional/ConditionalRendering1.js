import React from 'react'

const ConditionalRendering1 = () => {
  if (true) {
    return (
      <div>Condition1</div>
    )
  }
  else {
    return (
      <div>Condition2</div>
    )
  }
}

export default ConditionalRendering1
