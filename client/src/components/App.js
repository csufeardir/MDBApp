import React, { Component } from 'react';
import Dropdown from './Dropdown'
class App extends Component {
    //State
    state = {
        students: [],
        intervalIsSet: setInterval(this.fetchData, 1000),
    };
    //
    //Fetch Data Method
    fetchData = () => {
        fetch("http://127.0.0.1:3001/api/getData")
            .then(data => data.json())
            .then( res => { for(var k=0;k<res.data.length;k++){
                let data = res.data[k]
            this.setState( prevState => ({ students: [...prevState.students, {
                    'id': data.id,
                    'firstName': data.firstName,
                    'lastName': data.lastName,
                    'age': data.age,
                    'nationality': data.nationality,
                }] }
            ))}})
        };



    //

    //Fetch Data From DB on Mount
    componentDidMount() {
        this.fetchData();
    }
    //
    render() {
        const data = this.state.students;
        return (
            <Dropdown data={data}/>
        );
  }
}

export default App;
