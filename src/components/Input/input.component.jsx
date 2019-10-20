import React from 'react'
import List from '../List/list.component'
import Button from '../Button/button.component'

class Input extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [
                {
                    id: 0,
                    name: "item1",
                    done: false
                },
                {
                    id: 1,
                    name: "item2",
                    done: true
                },
                {
                    id: 2,
                    name: "item3",
                    done: false
                },
                {
                    id: 3,
                    name: "item4",
                    done: true
                }
            ],
            userInput: ""
        }
    }

    // handleChange = function (event) {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     }, () => console.log(this.state))
    // }

    handleClick = () => {
        this.setState({
            list: [...this.state.list, {
                id: this.state.list.length - 1,
                name: this.state.userInput,
                done: false
            }]
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state))
    }

    delall = () => {
        this.setState({
            list: []
        })
    }

    clear = () => {
        this.setState({
            list : this.state.list.filter((item) => !item.done)
        })
    }

    toggledone = (event) => {
        this.setState({
            
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input type='text' name='userInput' className='form-control input' onChange={this.handleChange} />
                </form>
                <Button handleClick={this.handleClick} delall={this.delall} cleardone={this.clear}/>
                <ul className='list-group' style={{ margin: "3vh" }}>
                    <List items={this.state.list} toggle={this.toggledone}/>
                </ul>
            </div>
        )
    }
}

export default Input