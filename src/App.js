import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home'


import './App.css';

function App() {
  return (
    <div >

      <Switch>

      {/* <Route path="/posts/new" component={NewPost}/>
      <Route path="/posts/:id" component={PostDetails}/>
      <Route path='/users/new' component={NewUser}/>
      <Route path="/users/:id" component={UserDetails}/>

      <Route path="/posts"
      render={(props)=><Post sortBy="confidence" {...props}/>}/>
      <Route path="/users"
      render={(props)=><User sortBy="confidence" {...props}/>}/> */}

      <Route path="/" exact component={Home}></Route>

      </Switch>
      
    </div>
  );
}

export default App;
