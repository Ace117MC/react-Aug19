import React from 'react'

const List = (props) => (
    <div>
        {
            props.items.map(item => {
                return (
                    <li className='list-group-item' style={{margin: "2vh"}}>
                        <div className="row">
                            <span className={item.done?'done col-4':'col-4'} onClick={() => props.handleToggle(item)}>{item.name} </span>
                            <button className="btn btn-primary" onClick={() => props.handleDelete(item)}>Remove Item</button>
                        </div>
                    </li>
                    
                )
            })
        }
        
    </div>
)

export default List