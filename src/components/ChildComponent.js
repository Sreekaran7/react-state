import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
        <button onClick={props.changeNameHandler}>Click - {props.name}</button>
    </div>
  )
}

export default ChildComponent