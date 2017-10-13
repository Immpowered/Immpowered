import React, { Component } from 'react';
import { observer } from 'mobx-react';
import welcome from './welcome.svg';
import './Splash.css';

@observer
class Splash extends Component {
    render() {
        // const description = "A personalized platform for immigrants to hone their current skills and learn new ones. We upskill your life and career by matching you with programs that are ready to help."
        return (
            <div id="splash">
                <img src={welcome} />
                <button className="start-button" >start</button>
            </div>
        );
    }
}

export default Splash;