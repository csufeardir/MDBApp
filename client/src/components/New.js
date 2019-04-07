import React from 'react'
import axios from "axios";
class New extends React.Component {
    constructor(props) {
        super(props)
        this.state = { id:'', firstName:'', lastName:'', age:0, nationality:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
    this.setState({[event.target.id]:event.target.value } )
    console.log(this.state)
    }

    handleSubmit(event){
        axios.post("http://localhost:3001/api/putData", [this.state])
    event.preventDefault()
        this.setState({id:'', firstName:'', lastName:'', age:0, nationality:''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Id:
                    <input type="text" value={this.state.id} id="id" onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    First Name:
                    <input type="text" value={this.state.firstName} id="firstName" onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Last Name:
                    <input type="text" value={this.state.lastName} id="lastName" onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Age:
                    <input type="number" value={this.state.age} id="age" onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Nationality:
                    <input type="text" value={this.state.nationality} id="nationality" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
export default New