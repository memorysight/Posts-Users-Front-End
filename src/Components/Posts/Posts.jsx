import React, { Component } from 'react'
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

const URL_POST= 'http://localhost:8080/app-api/posts';

export default class Posts extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts:[]
        }
    }

    

    componentDidMount(){
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
         console.log("these are the posts", posts);
        })
     
        
}

handleReply = async post =>{
    const posts = this.state.posts.find(p=>p.postId );
    this.setState({
        posts
    })
    await axios.put(URL_POST + '/' + post.postId);
}
handleUpdate = async post =>{
    const posts = this.state.posts.find(p=>p.postId );
    this.setState({
        posts
    })
    await axios.put(URL_POST + '/' + post.postId);
}



handelDelete = async post =>{
    const posts = this.state.posts.filter(p=>p.postId!==post.postId);
    this.setState({
        posts
    })
    await axios.delete(URL_POST + '/' + post.postId);
}



handleNewItem = () => {
  
    window.location = 'http://localhost:8080/posts/new';
  };
    
    render() {
     
        console.log("POSTSPROPS:",this.props)
        return (
            <div>
                <Navbar />

                <div>
                <button className="button3" 
                    onClick={() => this.handleNewItem()}>Create New Post</button>
                </div>

                <div>
                <body>
                <table>
                <tr>
                <th> Post Id </th>
                <th> Title </th>
                <th> Date </th>
                <th> Body </th>
                <th> Image </th>
                <th> Confidence </th>
                <th> Money </th>
                <th> Reply </th>
                <th> Update </th>
                <th> Delete </th>
                </tr>
                
                
                {this.state.posts.map(post => ( 
                <tr key={post.itemId}>
                <td >{post.postId}</td>
                <td >{post.title}</td>
                <td> {post.date} </td> 
                <td> {post.body}</td>
                <td> {post.image}</td>
                <td> {post.confidence}</td>
                <td> {post.money}</td>
                <td> 
                    <button className="btn btn-danger btn-sm"
                    onClick={()=>this.handleeReply(post)}>Reply</button>
                </td>

                <td> 
                    <button className="btn btn-danger btn-sm"
                    onClick={()=>this.handleUpdate(post)}>Update</button>
                </td>

                <td> 
                    <button className="btn btn-danger btn-sm"
                    onClick={()=>this.handelDelete(post)}>Delete</button>
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



