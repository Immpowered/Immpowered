import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import welcome from './welcome.svg';
import FlatButton from 'material-ui/FlatButton';
import './Landing.css';

@inject("store")
@observer
class Landing extends Component {
    onClick = () => {
        this.props.store.start()
    }
    render() { 
        const button_style  = {
            border: '1px white solid',
            color: 'white'
          };

        return (
            <div id="landing">
                <img alt="Welcome to Immpowered" className="welcome" src={welcome} />
                <FlatButton className="start-button" style={button_style} onClick={this.onClick}>start</FlatButton>
            </div>
        );
    }
}

export default Landing;     