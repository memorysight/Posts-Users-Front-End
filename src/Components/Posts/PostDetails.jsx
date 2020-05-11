import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import './Post.css';

 class PostDetails extends Component {
    state={
        users: [],
        selectedUser: null,
        post: null
     }

     handleSelectPost = (id)=> {
        const selectedUser = this.state.users.find(user => user.userId === parseInt(id));
        this.setState({ selectedUser });
     }

    componentDidMount(){
        const URL_POST= `http://localhost:8080/app-api/posts/${this.props.match.params.id}`;
        axios.get(URL_POST,  {headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }})
        .then((res)=>{ this.setState({ post: res.data })})
       
         axios.get('http://localhost:8080/app-api/users')
            .then(({ data })=>{
                const foundUsers = [];
                data.forEach((user)=>{
                    // console.log(item.kitchens)
                    user.posts.forEach(post=>{
                    
                        if(post.postId===parseInt(this.props.match.params.id)){
                            
                            foundUsers.push(user)
                        }
                    })
                })

            this.setState({users: foundUsers})
        })
    }

    render() {
        const { post, users, selectedUser } = this.state;
        const { image, body } = post ? post : {};

        return ( 
            <div >
                <Navbar />

                <div className="postDetailPage">
                    {post && 
                        <div className="imageContainer">
                            <img src={image} alt={body} />
                            <div>
                            Price: ${post.money}
                            </div>
                            <div>
                            Confidence: {post.confidence}
                            
                            <div>
                             {post.body}
                            </div>
                            <hr></hr>
                            </div>
                           
                        </div>
                       
                         
                    }
                </div>
                <h4 className="heading">Users In the Running to Win this Post</h4>
                {/* <h3 >{this.state.users.firstName}</h3> */}

               
                {/* {this.state.posts.map(post=>{
                    return <p className="kitchen-details heading">
                            <img src={post.image[this.props.match.params.id]} alt="kitchens pics"/>{post.title[this.props.match.params.id]}: {post.body[this.props.match.params.id]}<button className = "button4" onClick={this.handleSelectPost({firstName: post.title[this.props.match.params.id], lastName: post.body[this.props.match.params.id]})}>Select Item</button></p>
                    
                })} */}
            
              
                {users.map(user=>{
                    return <p className="kitchen-details heading">
                            <img src={user.image} alt="kitchens pics"/>{user.firstName} {user.lastName}<button className = "button4" onClick={this.handleSelectPost.bind(this, user.userId)}>Select Item</button></p>
                    
                })}
              

                <div className="heading">
                    <h2 >Select the Best Caption!</h2>
                   <hr></hr>
                    { selectedUser && 
                        <div>
                            <p><span>{selectedUser.firstName}</span> :
                            <img src={selectedUser.image} alt="Post pics"/></p>
                        </div>
                    }
                </div>

            </div>
        )
    }
}
export default withRouter(PostDetails);
