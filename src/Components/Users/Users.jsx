import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

const URL_USER= 'http://localhost:8080/app-api/users';


export default class Kitchens extends Component {
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){


        const URL_USER= 'http://localhost:8080/app-api/users';
        axios.get(URL_USER,  {headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }},)
        .then((res)=>{
         let users = res.data;
         this.setState({
             users
         })
         console.log("these are the users file", users);
        })
     
        
}

handleNewUser = () => {
    this.props.history.push('/users/new');
  };

handelDelete = async user =>{
    const users = this.state.users.filter(u=>u.userId!==user.userId);
    this.setState({
        users
    })
    await axios.delete(URL_USER + '/' + user.userId);
}


    render() {
        return (
            <div>
                <Navbar />

                <div>
                <button className="button3" 
                    onClick={() => this.handleNewUser()}>Create New User</button>
                </div>

                <div>
                <body>
                <table>
                <tr>
                <th> User First Name </th>
                <th> User Last Name </th>
                <th> User Password </th>
                <th> User Email </th>
                <th> User Role </th>
                <th> User Image </th>
                <th>Delete</th>
                </tr>

                
                {this.state.users.map(user => ( 
                <tr key={user.userId}>
                <td >{user.userId}</td>
                <td >{user.firstName}</td>
                <td> {user.lastName} </td> 
                <td> {user.password}</td>
                <td> {user.email}</td>
                <td> {user.role}</td>
                <td> {user.image}</td>
                <td> 
                    <button className="btn btn-danger btn-sm"
                    onClick={()=>this.handelDelete(user)}>Delete</button>
                </td>
                </tr>
                )
                )}
                </table>
                </body>
                </div>   


                
            </div>
        )
    }
}
