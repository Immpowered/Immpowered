import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './PickBackground.css';

@inject("store")
@observer
class PickBackground extends Component {
    onClick = () => {
        this.props.store.start()
    }
    render() { 
        return (
            <div className="pick-background">
                <button className="start-button" onClick={this.onClick}>start</button>
            </div>
        );
    }
}

export default PickBackground;     