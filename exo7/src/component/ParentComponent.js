import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = (props) => {

    return (
        <div>
            <ChildComponent handleClick={props.handleClick} />
            <p>{props.message}</p>
        </div>
    )
}

export default ParentComponent