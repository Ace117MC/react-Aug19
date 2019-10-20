import React from 'react'

const Button = (props) => (
    <div>
        <button style={{ marginLeft: "5vh" }} className='btn btn-success' onClick={props.handleClick}>Add To List</button>
        <button style={{ marginLeft: "5vh" }} className='btn btn-danger' onClick={props.delall}>Delete All</button>
        <button style={{ marginLeft: "5vh" }} className='btn btn-warning' onClick={props.cleardone}>Clear Done</button>
    </div>
)


export default Button