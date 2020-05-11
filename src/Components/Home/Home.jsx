import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Axios from '../Axios';
import HeroImage from '../HeroImage/HeroImage';

export default class Home extends Component {
    render() {
        return (
            <div>
             
                <Navbar />
                <HeroImage />
                <Axios />
            </div>
        )
    }
}
