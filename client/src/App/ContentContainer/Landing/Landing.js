import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import welcome from './welcome.svg';
import './Landing.css';

@inject("store")
@observer
class Landing extends Component {
    onClick = () => {
        this.props.store.start()
    }
    render() { 
        return (
            <div id="landing">
                <img className="welcome" src={welcome} />
                <button className="start-button" onClick={this.onClick}>start</button>
            </div>
        );
    }
}

export default Landing;     