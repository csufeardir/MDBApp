import React from 'react';
import axios from "axios";
class Init extends React.Component {

    //Create New Entry
    putDataToDB = (data) => {
        axios.post("http://localhost:3001/api/putData", data)
    };
    //

    componentDidMount() {
        var dbLoad = [
            {id: 1,firstName: 'John',lastName: 'Doe',age: 24,nationality: 'English'},
            {id: 2,firstName: 'Jan',lastName: 'Dewaele',age: 27,nationality: 'Belgian'},
            {id: 3,firstName: 'Jonathan',lastName: 'Van Driessen',age: 33,nationality: 'Belgian'},
            {id: 4,firstName: 'Anthony',lastName: 'Lamot',age: 30,nationality: 'Belgian'},
            {id: 5,firstName: 'Tim',lastName: 'Ferris',age: 36,nationality: 'American'},
            {id: 6,firstName: 'Melinda',lastName: 'Gates',age: 63,nationality: 'American'},
            {id: 7,firstName: 'Jan',lastName: 'De Hollander',age: 13,nationality: 'Dutch'},
            {id: 8,firstName: 'Maarten',lastName: 'De Vriendt',age: 47,nationality: 'Dutch'},
            {id: 9,firstName: 'Furkan',lastName: 'Kursun',age: 23,nationality: 'Turkish'},
            {id: 10,firstName: 'Onur',lastName: 'Tekin',age: 21,nationality: 'Turkish'}
        ]
        this.putDataToDB(dbLoad)
    }

    render() {
        return <h1>Database is Initialized!</h1>

    }
}
export default Init