import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Axios from '../Axios';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Axios />
                
            </div>
        )
    }
}
