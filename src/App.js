import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import NewPost from './Components/Posts/NewPost';
import PostDetails from './Components/Posts/PostDetails';
import NewUser from './Components/Users/NewUser';
import UserDetails from './Components/Users/UserDetails';
import Posts from './Components/Posts/Posts';
import Users from './Components/Users/Users';
// import AudioAnalyzer from './AudioAnalyzer';
import './App.css';
import AudioAnalyzer from './Components/MicVisualizer/AudioAnalyzer';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: null
    };
    this.toggleMicrophone = this.toggleMicrophone.bind(this);

    
  
  }

  

  async getMicrophone() {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    this.setState({ audio });
  }

  stopMicrophone() {
    this.state.audio.getTracks().forEach(track => track.stop());
    this.setState({ audio: null });
  }

  toggleMicrophone() {
    this.state.audio ? this.stopMicrophone() : this.getMicrophone();
  }

  render() {
    return (
      <div >
          {/* <div className='VoiceToText'>
      <h1>React Text to Speech App</h1>
      <input
        type='text'
        value={ourText}
        placeholder='Enter Text'
        onChange={(e) => setOurText(e.target.value)}
      />
      <button onClick={() => speechHandler(msg)}>SPEAK</button>
    </div> */}

    



    <div className="MicVisualizer">
          <div className="controls">
            <button onClick={this.toggleMicrophone}>
              {this.state.audio ? 'Stop Microphone' : 'Get microphone input'}
            </button>
          </div>
          {this.state.audio ? <AudioAnalyzer audio={this.state.audio} /> : ''}
        </div>

        <video autoPlay muted loop id="bg-video">
            <source src="Hal9muchBetterFinal2.mp4" type="video/mp4" />
        </video>
          <div className="content">
     

        <Switch>

          

          {/* <Route path="/posts/new" component={NewPost}/> */}
          <Route path="//localhost:8080/posts/new" component={NewPost} />
          <Route path="/posts/:id" component={PostDetails} />
          <Route path='/users/new' component={NewUser} />
          <Route path="/users/:id" component={UserDetails} />

          <Route path="/posts"
            render={(props) => <Posts sortBy="confidence" {...props} />} />
          <Route path="/users"
            render={(props) => <Users sortBy="confidence" {...props} />} />

          <Route path="/" exact component={Home}></Route>

        </Switch>

      </div>
      </div>
    );
  }
}

export default App;
