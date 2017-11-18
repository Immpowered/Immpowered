import { Card, CardTitle } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import QuestionStore from '../Questions.Store';
import './MultipleChoice.css';

export default class MultipleChoice extends Component {
    set_answer = (event) => {
        QuestionStore.set_answer(event.target.value)
    }
    render() {
        const radio_style = {
            paddingTop: '10px'
        }

        return (
            <Card style={this.props.style}>
                <CardTitle title={this.props.title} titleStyle={{ padding: '10px 0', fontSize: '40px' }} />
                <div className="question">
                    <label>{this.props.label}</label>
                    <RadioButtonGroup name="needEnglish" defaultSelected={true} onChange={this.set_answer}>
                        <RadioButton value={true} label="Yes" style={radio_style} />
                        <RadioButton value={false} label="No" style={radio_style} />
                    </RadioButtonGroup>
                </div>
                <RaisedButton className="raised-button" label="Submit" primary={true} onClick={QuestionStore.next_question} />
            </Card>
        )
    }
}