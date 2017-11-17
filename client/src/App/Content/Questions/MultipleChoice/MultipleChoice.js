import { observer } from 'mobx-react';
import { Card, CardTitle } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import QuestionStore from '../Questions.Store';

@observer
export default class MultipleChoice extends Component {
    str_to_bool = (value) => {
        if (value && typeof value === 'string') {
            if (value.toLowerCase() === "true") return true;
            if (value.toLowerCase() === "false") return false;
          }
          return value;
    }
    set_answer = (event) => {
        QuestionStore.set_answer(this.str_to_bool(event.target.value))
    }
    render() {
        const radio_style = {
            paddingTop: '10px'
        }
        let value_selected = QuestionStore.answers[this.props.title]
        return (
            <Card style={this.props.style}>
                <CardTitle title={this.props.title} style={{ padding: '10px 0' }} />
                <div className="question">
                    <label>{this.props.label}</label>
                    <RadioButtonGroup name={this.props.title} valueSelected={value_selected} onChange={this.set_answer}>
                        <RadioButton value={true} label="Yes" style={radio_style} />
                        <RadioButton value={false} label="No" style={radio_style} />
                    </RadioButtonGroup>
                </div>
                <RaisedButton label="Submit" primary={true} onClick={QuestionStore.next_question} />
            </Card>
        )
    }
}