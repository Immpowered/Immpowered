import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
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
                <div id="splash-text">WE<br></br>GUIDE<br></br>YOU</div>
                <FlatButton className="start-button" style={button_style} onClick={this.onClick}>start</FlatButton>
                <div id="logo">IMMPOWERED</div>
                <div id="subtext">The Guide to Help NYC Immigrants</div>
            </div>
        );
    }
}

export default Landing;     