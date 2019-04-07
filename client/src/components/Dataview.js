import React, { Component } from 'react' 
import Dbelement from './Dbelement' 
class Dataview extends React.Component {
	render(){
		return  (
				<ul>
				<Dbelement data={this.props.data} nationdata={this.props.nationdata}/>
                </ul>	
			)				
	}
}
export default Dataview;				
