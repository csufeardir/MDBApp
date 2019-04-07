import React, { Component } from 'react';
import Student from './Student';

class Dbelement extends Component {
	constructor(props) {
    super(props);
	this.state = {
		sort: false,
		dir: '',
		counter: 0
		}
		this.clickHandler=this.clickHandler.bind(this)
	}
	
	clickHandler(){
		if(this.state.counter%2==0)
		this.setState({sort:true, dir:'asc', counter: this.state.counter+1})
		else
		this.setState({sort:true, dir:'desc', counter: this.state.counter+1})
	}
	
	render(){
		const nationdata = this.props.nationdata;
	    const student = this.props.data;
		const filteredStudents = []
		for(var k=0; k<student.length;k++){
			if(student[k].nationality==nationdata)
				filteredStudents.push(student[k])
		}
		
	if(this.state.sort && this.state.dir==='asc')
		filteredStudents.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1)
		
		else if(this.state.sort && this.state.dir==='desc')
		filteredStudents.sort((a, b) => (a.firstName > b.firstName) ? -1 : 1)
	
		return(		
			                <li style={{ padding: "10px" }} key={filteredStudents.id}>
								<Student data={filteredStudents}/>
								<button onClick={this.clickHandler}>Sort</button>
                            </li>
		)
	}
}

export default Dbelement;