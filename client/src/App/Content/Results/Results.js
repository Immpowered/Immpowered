import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Card, CardTitle, CardText, CardMedia } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './Results.css';

@inject("store")
@observer
export default class Results extends Component {
    render() {
        const card_style = {
            width: '800px',
            transitionDuration: '0.3s',
            height: '100%'
        }
        const subtext = "Brooklyn Workforce Innovations has eight specialized training programs for different job sectors. You’ll get hands-on experience and job placement support for up to two years after graduation. Not sure where to look first? Answer these three questions and we can help you get started on your search for the right program."
        return (
            <div className="results">
                <h1> Results </h1>
                <Card style={card_style}>
                    <CardMedia
                        overlay={<CardTitle title="Brooklyn Workforce Innovations" subtitle={"BWI helps jobless and working poor New Yorkers establish careers."} />}
                    >
                        <img src={"https://bwiny.org/wp-content/uploads/2016/10/apply-slide1.jpg"} alt="Brooklyn Workforce Innovations" />
                    </CardMedia>
                    <p>{subtext}</p>
                </Card>
            </div>
        );
    }
}
