import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import QuestionStore from '../Questions.Store';

export default class TextArea extends Component {
    set_answer = (event) => {
        QuestionStore.set_answer(event.target.value)
    }
    render() {
        return (
            <Card style={this.props.style}>
                <CardTitle title={this.props.title} style={{ padding: '10px 0' }} />
                <div className="question">
                    <label>{this.props.label}</label>
                    <TextField fullWidth={true} hintText={this.props.hint_text} onChange={this.set_answer}/>
                </div>
                <RaisedButton label="Submit" primary={true} onClick={QuestionStore.next_question} />
            </Card>
        )
    }
}