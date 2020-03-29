import React, { Component } from 'react'
import axios from 'axios';

import {withRouter} from 'react-router-dom';





class Axios extends Component {
    constructor(props){
      super(props);
      
      this.state={
          posts: [],
          users:[],
        //   customers:[] 
      }
    }

     handleClick=(element)=>()=>{
        // console.log("element", element)
        this.props.history.push(`/users/${element.userId}`)
        
    }

    componentDidMount(){
       
       
        // const URL= 'http://localhost:8080/app-api/customers';
        // axios.get(URL)
        // const URL_CUST= 'http://localhost:8080/app-api/customers';
        const URL_USER= 'http://localhost:8080/app-api/users';
        const URL_POST= 'http://localhost:8080/app-api/posts';
        axios.get(URL_POST,  {headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }},)
        .then((res)=>{
         let posts = res.data;
         this.setState({
             posts
         })
         console.log("Posts", posts);
        })


        axios.get(URL_USER,  {headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }},)
        .then((res)=>{
         let users = res.data;
         this.setState({
             users
         })
         console.log("Users", users);
        })
        // axios.get(URL_CUST,  {headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Content-Type': 'application/json',
        //   }},)
        // .then((res)=>{
        //  let customers = res.data;
        //  this.setState({
        //      customers
        //  })
       
        // })
     
    }

    render() {
        
        

        const {posts, users} = this.state;
        // console.log("new items",items);
        // console.log(this.state.items);
        return (
            
            <div>
           
            
             <h1 className="heading">Embarrass your Friends or Yourself!</h1>
             
             <div className="menu-grid-content">
              
             
             
             {users.map((user, key)=>(
                 <div className = "menu-grid-element" onClick={this.handleClick(user)}>


                 <h1>{users[key].firstName}   </h1>
                 <img src={users[key].image} alt="Users pics"/>
                 {/* <img src={`https://source.unsplash.com/480X480/?kitchens`} alt="kitchen"></img> */}
                 {/* </Link> */}
                 </div>
                
             ))}
             </div>

             <h1>Posts</h1>
             <br></br>
             {posts.map((post, key)=>(
                 <div>
                 <h1>{posts[key].title}   </h1>
                 <img src={posts[key].image} alt="Post pics"/>
                 </div>
          
              
                
             ))}
             <br></br>
               <h1>Users</h1>
               
             {users.map((customer, key)=>(
                 <div>
                 <h1>{users[key].firstName}   </h1>
                 <img src={users[key].image} alt="Users pics"/>
                 </div>
          
             ))}
              {/* <Customers customers={customers} /> */}
          
             
            
                
            </div>
        )
    }
}

export default withRouter(Axios);
