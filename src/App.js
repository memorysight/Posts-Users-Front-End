import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import NewPost from './Components/Posts/NewPost';
import PostDetails from './Components/Posts/PostDetails';
import NewUser from './Components/Users/NewUser';
import UserDetails from './Components/Users/UserDetails';
import Posts from './Components/Posts/Posts';
import Users from './Components/Users/Users';



import './App.css';

function App() {
  return (
    <div >

      <Switch>

      {/* <Route path="/posts/new" component={NewPost}/> */}
      <Route path="//localhost:8080/posts/new" component={NewPost}/>
      <Route path="/posts/:id" component={PostDetails}/>
      <Route path='/users/new' component={NewUser}/>
      <Route path="/users/:id" component={UserDetails}/>

      <Route path="/posts"
      render={(props)=><Posts sortBy="confidence" {...props}/>}/>
      <Route path="/users"
      render={(props)=><Users sortBy="confidence" {...props}/>}/>

      <Route path="/" exact component={Home}></Route>

      </Switch>
      
    </div>
  );
}

export default App;
