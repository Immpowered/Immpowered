import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import ResultStore from '../Results.Store';
import { Carousel } from 'react-responsive-carousel';

@observer
export default class ResultCard extends Component {
    openInNewTab = (url) => {
        return () => {
            var win = window.open('http://'+url, '_blank');
            win.focus();
        }
    }

    render() {    
        const card_style = {
                transitionDuration: '0.3s',
                height: '100%'
            }

        return (          
            <Card style={card_style}>
                <CardTitle title={this.props.name} subtitle={this.props.url} />
                <CardText>{this.props.description}</CardText>
                <CardActions>
                    <FlatButton label="Visit Website" primary={true} onClick={this.openInNewTab(this.props.url)} />
                </CardActions>
            </Card>
        );
    }
}


