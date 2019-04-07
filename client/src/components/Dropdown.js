import React, { Component } from 'react';
import List from './List'
import Dataview from './Dataview'
class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.myRef=React.createRef()
        this.state = {
            currentNation: ''
        }

    }


Change = (event) => {
	this.setState({currentNation: event.target.value})
}

	render(){
		var Nations=[...new Set(this.props.data.map(x => x.nationality))].sort();

		return (
			<div id='parent'>
			<select name='Nations'  onChange={this.Change} ref={this.myRef} value={this.state.currentNation}>
				<List nationdata={Nations} firstNation={Nations[0]}/>
			</select>
				<Dataview nationdata={(this.state.currentNation!=='')?this.state.currentNation:Nations[0]} data={this.props.data}/>
			</div>
			
		)
	}

}
export default Dropdown