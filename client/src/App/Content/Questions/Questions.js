import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import './Questions.css';

@inject("store")
@observer
export default class Questions extends Component {
    onChange = (event) => {
        this.props.store.set_career(event.target.innerText);  
    }
    render() { 
        const card_style = {
            width: '400px',
            transitionDuration: '0.3s',
            height: '300px'
        }
        return (
            <div className="questions">
                <Card style={card_style}>
                    <CardTitle title="English Level" />           
                </Card>
            </div>
        );
    }
}
