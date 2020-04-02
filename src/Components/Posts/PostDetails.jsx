import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import './Post.css';

 class PostDetails extends Component {
    state={
        users:[],
        selectedUsers:[]
     }

     handleSelectPost =(post)=>()=>{
       
        this.setState({
            selectedPosts : [...this.state.selectedPosts, post]
        })

     }

    componentDidMount(){
       
         axios.get('http://localhost:8080/app-api/users')
        .then(({data})=>{
     
        
        const foundUsers = [];
        data.forEach((user)=>{
            // console.log(item.kitchens)
            user.posts.forEach(post=>{
            
                if(post.postId===parseInt(this.props.match.params.id)){
                    
                    foundUsers.push(user)
                }
               
               
            })

        })


        this.setState({
            users: foundUsers
        })
        })
    }
    render() {
        console.log(this.state.selectedUsers)
        
        return (
            <div >
                <Navbar />
                <h4 className="heading">These Are the Lucky People who Lol'd</h4>
                <h3 >{this.state.users.firstName}</h3>
                <img src={this.state.users.image} alt="Post pics"/>  
                {this.state.users.map(user=>{
                    return <p className="kitchen-details heading">{user.firstName}: {user.lastName}<button className = "button4" onClick={this.handleSelectPost({firstName: user.firstName, lastName: user.lastName})}>Select Item</button></p>
                })}

                <div className="heading">
                    <h2 >ReSend a Sleak!</h2>
                   <hr></hr>
                    {this.state.selectedUsers.map((user, i)=>{
                        console.log("user",user);
                        return  <p><span>{user.firstName}</span> :
                        <span>  <img src={user.image} alt="Post pics"/></span></p>
                   
                        
                    })}
                </div>

            </div>
        )
    }
}
export default withRouter(PostDetails);
