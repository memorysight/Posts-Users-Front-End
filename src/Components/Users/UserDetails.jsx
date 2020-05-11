import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import './User.css';

 class UserDetails extends Component {
    state={
        posts: [],
        selectedPost: null,
        user: null
     }

     handleSelectUser = (id)=> {
        const selectedPost = this.state.posts.find(post => post.postId === parseInt(id));
        this.setState({ selectedPost });
     }

    componentDidMount(){
        const URL_USER= `http://localhost:8080/app-api/users/${this.props.match.params.id}`;
        axios.get(URL_USER,  {headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }})
        .then((res)=>{ this.setState({ user: res.data })})
       
    
      
    }

    render() {
        const { user, posts, selectedPost } = this.state;
        const { image, firstName, lastName, role, email } = user ? user : {};

        return ( 
            <div >
                <Navbar />

                <div className="postDetailPage">
                    {user && 
                        <div className="imageContainer">
                            <img src={image} alt={firstName} />
                            <div>
                                Name:{firstName} {lastName}
                            </div>
                            <div>
                                Role:{role}
                            </div>
                            <div>
                                Email:{email}
                            </div>
                            
                           
                        </div>
                       
                         
                    }
                </div>
                <h4 className="heading">User Details and Posts Awarded</h4>
                {/* <h3 >{this.state.users.firstName}</h3> */}

               
              
                {user && user.posts.map(post=>{
                    return <p className="kitchen-details heading">
                            <img src={post.image} alt="kitchens pics"/>{post.title} {post.money}<button className = "button4" onClick={this.handleSelectUser.bind(this, post.postId)}>Select Item</button></p>
                    
                })}

                <div className="heading">
                    <h2 >Match the Dollar Amount!</h2>
                   <hr></hr>
                    { selectedPost && 
                        <div>
                            <p><span>{selectedPost.title}</span></p> :
                            <div>
                            <img src={selectedPost.money} alt="Post pics"/>
                            </div>
                        </div>
                    }
                </div>

            </div>
        )
    }
}
export default withRouter(UserDetails);
