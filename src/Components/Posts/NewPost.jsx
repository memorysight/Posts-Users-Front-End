import React, { Component } from 'react'
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
//import Item from '..Items/Item';
import Users from '../Users/Users';


export default class NewPost extends Component {

    

    state = {
            post:{
            //itemId: '',
            title: "",
            date: "",
            body: "",
            image: "",
            confidence: "",
            money: ""
            }
         
        }
  
        
    componentDidMount(){

       const {handle} = this.props.match.params;

        

        
        // axios.get(URL_ITEM,  {headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Content-Type': 'application/json',
        //   }},)
        // .then((res)=>{
        //  let items = res.data;
        //  this.setState({
        //      items
        //  })
        //  console.log("these are the items", items);
        // })  
}

handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state.item);
    const URL_POST= 'http://localhost:8080/app-api/posts';
    axios.post(URL_POST, this.state.post,{headers: {
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

handleChange= e =>{
    const post = {...this.state.post};
    post[e.currentTarget.name] = e.currentTarget.value;
    this.setState({post});
};


render(){
    console.log(this.state);
    return(
        <React.Fragment>
        <Navbar />
        
        <h3 className="heading">Create a New Post</h3>
        <div>
        <form onSubmit={this.handleSubmit}>
        <div className="kitchen-details">
        <label htmlFor="Post Title">Post Title</label>
        <input onChange={this.handleChange} value={this.state.post.title} name ="title" id="Post Title" className="kitchen-details"></input>
        </div>
        <div className="kitchen-details">
        <label htmlFor="Date">Date</label>
        <input onChange={this.handleChange} value={this.state.post.date} name="date" id="Date" className="kitchen-details"></input>
        </div>
        <div className="kitchen-details">
        <label htmlFor="Body">Body</label>
        <input onChange={this.handleChange} value={this.state.post.body} name="body" id="Body" className="kitchen-details"></input>
        </div>
        <div className="kitchen-details">
        <label htmlFor="Image">Image</label>
        <input onChange={this.handleChange} value={this.state.post.image} name="image" id="Image" className="kitchen-details"></input>
        <div className="kitchen-details">
        <label htmlFor="Confidence">Confidence</label>
        <input onChange={this.handleChange} value={this.state.post.confidence} name="confidence" id="Confidence" className="kitchen-details"></input>
        </div>
        <div className="kitchen-details">
        <label htmlFor="Money">Money</label>
        <input onChange={this.handleChange} value={this.state.post.money} name="money" id="Money" className="kitchen-details"></input>
        </div>
        <button type="submit" className= "button2">Submit</button> 
        </div>
        </form>
        </div>

       

        </React.Fragment>

    );
}



}