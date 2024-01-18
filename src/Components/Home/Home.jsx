import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Axios from '../Axios';
import HeroImage from '../HeroImage/HeroImage';
import Chloe from '../Chloe/Chloe';
import Dictaphone1 from '../Dictaphone/Dicataphone,';
import VoiceToText from '../VoiceToText/VoiceToText';

export default class Home extends Component {
    render() {
        return (
            <div>
             
                <Navbar />
                <VoiceToText />
                <Dictaphone1 />
                <HeroImage />
                <Chloe />
                <Axios />
            </div>
        )
    }
}
