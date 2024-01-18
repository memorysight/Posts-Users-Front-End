import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import Posts from '../Posts/Posts';
import { BASE_API_URL } from  '../../constants/ApiConstants'
import { get, post } from '../../api/httpClient'

export default class NewUser extends Component {
    state = {
        user:{
            firstName: "",
            lastName: "",
            password: "",
            email: "",
            role: "",
            image: "",
            posts: []
        },
        postsFromApi:[]
    }

    componentDidMount(){
        get(`${BASE_API_URL}/posts`, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        })
        .then((res) => {
            this.setState({ postsFromApi: res.data });
        })
    }


    handleSubmit=(e)=>{
        e.preventDefault();
        post(`${BASE_API_URL}/users`, this.state.user, {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        })
    }

    handleOptionsChange = e => {
        const options = e.target.options;
        const posts = [];

        Array.from(options).forEach(option => {
            if (option.selected) {
                posts.push({ postId: parseInt(option.value) });
            }
        });
        
        this.setState({ user: {...this.state.user, posts }})
    }

    handleChange= e =>{
        const user = {...this.state.user};
        user[e.currentTarget.name] = e.currentTarget.value;
        this.setState({user});
    };

    handleSelect = (e) => {
        const posts = Array.from(e.target.options)
            .filter(option => option.selected)
            .map(option => parseInt(option.value));

        this.setState({user:{...this.state.user, posts}});
    }

    render(){
        console.log('posts: ', this.state.user.posts);
        return(
            <React.Fragment>
                <Navbar />
                
                <h3 className="heading">Create a New User</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="kitchen-details">
                            <label htmlFor="User First Name">User First Name</label>
                            <input onChange={this.handleChange} value={this.state.user.firstName} 
                            name ="firstName" id="User First Name" className="kitchen-details"></input>
                        </div>
                        <div className="kitchen-details">
                            <label htmlFor="User Last Name">User Last Name</label>
                            <input onChange={this.handleChange} value={this.state.user.lastName} 
                            name="lastName" id="lastName" className="kitchen-details"></input>
                        </div>
                        <div className="kitchen-details">
                            <label htmlFor="User Password">User Password</label>
                            <input onChange={this.handleChange} value={this.state.user.password} 
                            name="password" id="Password" className="kitchen-details"></input>
                        </div>
                        <div className="kitchen-details">
                            <label htmlFor="Email">Email</label>
                            <input onChange={this.handleChange} value={this.state.user.email} 
                            name="email" id="Email" className="kitchen-details"></input>
                        <div className="kitchen-details">
                            <label htmlFor="Role">Role</label>
                            <input onChange={this.handleChange} value={this.state.user.role} 
                            name="role" id="Role" className="kitchen-details"></input>
                        </div>
                        <div className="kitchen-details">
                            <label htmlFor="Image">Image URL</label>
                            <input onChange={this.handleChange} value={this.state.user.image} 
                            name="image" id="Image" className="kitchen-details"></input>
                        </div>
                        
                        <div className="kitchen-details">
                            <label htmlFor="posts">Exploits Nullified </label>
                            <select id="posts" multiple onChange={this.handleOptionsChange}>
                                {this.state.postsFromApi.map(({postId, title}) => {
                                    return <option value={postId}>{title}</option>;
                                })}
                            </select>
                        </div>
                        
                        <button type="submit" className= "button2">Submit</button> 
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}