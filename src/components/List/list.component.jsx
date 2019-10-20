import React from 'react'

const List = (props) => (
    <div>
        {
            props.items.map(item => {
                return (
                    <li className='list-group-item row d-flex' style={{margin: "2vh"}}>
                        <span className={item.done?'done col-4':'col-4'}>{item.name} </span>
                    </li>
                    
                )
            })
        }
        
    </div>
)

export default List