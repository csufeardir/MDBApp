
import React, { Component } from 'react';
class Student extends React.Component {
	render() {
	    const std = this.props.data;
		return std.map(x=>(
            <p>Name: {x.firstName} {x.lastName} ({x.age})</p>
            )
	    )
	}
}

export default Student