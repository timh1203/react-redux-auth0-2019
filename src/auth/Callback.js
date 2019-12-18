import React from 'react'

const Callback = (props) => {
  return (
    <div>
      Callback
      {console.log("Callback is hit, props are:", props)}
    </div>
  )
}

export default Callback
