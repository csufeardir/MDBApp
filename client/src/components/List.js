import React, { Component } from 'react' 

class List extends React.Component{
	
	render(){
		return this.props.nationdata.map( data => (
			<option value={data}>{data}</option>
			)
		)
	}
}

export default List