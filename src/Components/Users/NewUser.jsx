import React, { Component } from 'react'
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
//import Item from '..Items/Item';
import Posts from '../Posts/Posts';


export default class NewUser extends Component {

    

    state = {
        user:{
            //itemId: '',
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
    const URL_POST= 'http://localhost:8080/app-api/posts';
    axios.get(URL_POST,  {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }},)
    .then((res) => {
        this.setState({ postsFromApi: res.data });
    })
}


handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state.user);
    const URL_USER= 'http://localhost:8080/app-api/users';
    axios.post(URL_USER, this.state.user,{headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }},)

    // const URL_KIT= 'http://localhost:8080/app-api/kitchens';
    // axios.post(URL_KIT,  this.state.kitchen, {headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //   }},)
    
    //  console.log("Kitchen Directory", kitchens);
    

// let items = {
//     itemId: this.state.items.itemsid,
//     description: values.description,
//     targetDate: values.targetDate
// }

// if (this.state.id === -1) {
//     TodoDataService.createTodo(username, todo)
//         .then(() => this.props.history.push('/todos'))
// }

//axios.post('/URL_ITEM', items);

}

handleOptionsChange = e => {
    const options = e.target.options;
    const posts = [];

    Array.from(options).forEach(option => {
        if (option.selected) {
            posts.push(option.value);
        }
    });
    // merging posts into user.
    // Object.assign does the same
    // Object.assign({}, this.state.user, posts)
    this.setState({ user: {...this.state.user, posts }})
}

handleChange= e =>{
    const user = {...this.state.user};
    user[e.currentTarget.name] = e.currentTarget.value;
    this.setState({user});
};

handleSelect = (e)=>{

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
        <input onChange={this.handleChange} value={this.state.user.firstName} name ="firstName" id="User First Name" className="kitchen-details"></input>
        </div>
        <div className="kitchen-details">
        <label htmlFor="User Last Name">User Last Name</label>
        <input onChange={this.handleChange} value={this.state.user.lastName} name="lastName" id="lastName" className="kitchen-details"></input>
        </div>
        <div className="kitchen-details">
        <label htmlFor="User Password">User Password</label>
        <input onChange={this.handleChange} value={this.state.user.password} name="password" id="Password" className="kitchen-details"></input>
        </div>
        <div className="kitchen-details">
        <label htmlFor="Email">Email</label>
        <input onChange={this.handleChange} value={this.state.user.email} name="email" id="Email" className="kitchen-details"></input>
        <div className="kitchen-details">
        <label htmlFor="Role">Role</label>
        <input onChange={this.handleChange} value={this.state.user.role} name="role" id="Role" className="kitchen-details"></input>
        </div>
        <div className="kitchen-details">
        <label htmlFor="Image">Image URL</label>
        <input onChange={this.handleChange} value={this.state.user.image} name="image" id="Image" className="kitchen-details"></input>
        </div>
        
        <div className="kitchen-details">
        <label htmlFor="posts">Select a post to associate with this user</label>
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