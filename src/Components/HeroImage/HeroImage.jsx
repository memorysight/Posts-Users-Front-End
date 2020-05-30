import React, { Component } from 'react';
import axios from 'axios';
import './HeroImage.css';

export default class HeroImage extends Component {
    constructor(props){
        super(props);
        
        this.state={
            posts: [],
            randomPosts:[]
        }
      }

      componentDidMount() {
        const URL_POST= 'http://localhost:8080/app-api/posts';
            axios.get(URL_POST,  {headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }})
            .then((res)=>{
                let posts = res.data;
                console.log('posts', posts)
                this.setState({ posts })
            })
      }

      getRandomPosts() {
        const { posts } = this.state;
        const randomImages = [];
        const previousRandomNumbers = [];

        const getRandomNum = () => {
            let randomNumber = Math.floor(Math.random() * posts.length); 

            if (!previousRandomNumbers.includes(randomNumber)) {
                previousRandomNumbers.push(randomNumber);
                
                return randomNumber;
            }

            return getRandomNum();
        }
        

        for (let i=0; i<3; i++) {
            let uniqueRandomNum = getRandomNum();
            let { image, body } = posts[uniqueRandomNum];
            randomImages.push(<img src={image} alt={body} style={{marginRight: '5px'}} />);
        }

        return randomImages;
      }
      

      //at some point run a random function which populates an array called randomPosts
    //   and choose the first three of them to populate the hero image banner
    render() {
        const { posts } = this.state;

        return (
            <>  
                <h1 className="heading">Welcome EAA!</h1>
                {posts.length >= 3 && 
                    <div className="hero-image">{this.getRandomPosts()}</div>
               
                }
            </>
        );
        
    }
}

