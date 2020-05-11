import React, { Component } from 'react'
import axios from 'axios';
import FourColGrid from './FourColGrid/FourColGrid';
import {withRouter} from 'react-router-dom';

class Axios extends Component {
    constructor(props){
      super(props);
      
      this.state={
          posts: [],
          users:[]

      }
    }

     handleClick=(element)=>()=>{
        console.log("element", element)
        this.props.history.push(`/posts/${element.postId}`)
    }

    handleClickUser=(elementUser)=>()=>{
      console.log("elementUser", elementUser)
      this.props.history.push(`/users/${elementUser.userId}`)
  }

    componentDidMount(){
       
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

    }

    render() {
  
        const {posts, users} = this.state;
 
        return (
            
            <div>
 
             <h1 className="heading">The Funniest Caption Wins!</h1>
             <h3 className="heading2">All Proceeds go to Covid19 Research!</h3>
             <h3 className="heading2">Click On Images for Details</h3>
             
             <div className="menu-grid-content">

             {posts.map((user, key)=>(
                 <div className = "menu-grid-element" onClick={this.handleClick(user)}>


                 <h1>{posts[key].title}   </h1>
                 <h3>Date: {posts[key].date}</h3>
                 <h3>Money:{ posts[key].money}</h3>
                 <div className="imageMain">
                 <img src={posts[key].image} alt="Users pics"/>
                 </div>
                 <h3 classname="body-text">{posts[key].body}   </h3>
                 {/* <img src={`https://source.unsplash.com/480X480/?kitchens`} alt="kitchen"></img> */}
                 {/* </Link> */}
                 </div>
                
             ))}
             </div>

             <hr></hr>
             <br></br>
               <h1 className="heading">Users</h1>
               <div className="menu-grid-content2">
               
               
             {users.map((post, key)=>(
                 <div className="menu-grid-element2" onClick = {this.handleClickUser(post)}>
                    
                 <h1>{users[key].firstName}   </h1>
                 <img src={users[key].image} alt="Users pics"/>
                 </div>
               
          
             ))}
             </div>
     
            </div>
        )
    }
}

export default withRouter(Axios);
