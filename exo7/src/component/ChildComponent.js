import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>Click me</button>
    </div>
  )
}

export default ChildComponent