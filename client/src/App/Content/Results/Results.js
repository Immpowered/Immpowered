import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './Results.css';

@inject("store")
@observer
export default class Results extends Component {
    render() {
        const card_style = {
            width: '800px',
            transitionDuration: '0.3s',
            height: '700px',
            padding: '26px'
        }
        return (
            <div className="results">
                <h1>Results</h1>
                <Card style={card_style}>
                    <CardTitle 
                        title="Brooklyn Workforce Innovations" 
                        subtitle="BWI helps jobless and working poor New Yorkers establish careers."
                        style={{padding: '10px 0'}} />
                    <p>BWI has eight specialized training programs for different job sectors. You’ll get hands-on experience and job placement support for up to two years after graduation.
Not sure where to look first? Answer these three questions and we can help you get started on your search for the right program.</p>
                    <img src={"https://bwiny.org/wp-content/uploads/2016/10/apply-slide1.jpg"} alt="Brooklyn Workforce Innovations" /> 
                </Card>
            </div>
        );
    }
}
