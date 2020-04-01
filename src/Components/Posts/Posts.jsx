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

handelDelete = async post =>{
    const posts = this.state.posts.filter(p=>p.postId!==post.postId);
    this.setState({
        posts
    })
    await axios.delete(URL_POST + '/' + post.postId);
}



handleNewItem = () => {
    // Navigate to /products
    //this.props.history.replace("/products");
    this.props.history.push('/posts/new');
  };
    
    render() {
        // console.log("Inside item file",this.props.items)
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
                <td> 
                    <button className="btn btn-danger btn-sm"
                    onClick={()=>this.handelDelete(post)}>Delete</button>
                </td>
                </tr>
                )
                )}

                {/* The props map */}
                {/* {this.props.items.map(item => ( 
                <tr key={item.itemId}>
                <td >{item.itemId}</td>
                <td >{item.name}</td>
                <td> {item.price} </td> 
                <td> {item.ingredients}</td>
                <td> {item.description}</td>
                </tr>
                )
                )} */}



                </table>
                </body>
                </div>   

            </div>
        )
    }
}



