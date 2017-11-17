import { Card, CardTitle } from 'material-ui/Card';
import React, { Component } from 'react';
// import InfoStore from '../info.Store';

import { teal500, yellow700, purple500, orange500, brown400, grey500 } from 'material-ui/styles/colors';
import QuestionStore from '../Questions.Store';

export default class InfoCard extends Component {
    get_icon_style = (index) => {
        const color_map = [teal500, yellow700, purple500, orange500, brown400]
        let curr_index = QuestionStore.question_index
        let color = (index == curr_index) ?  color_map[index] : grey500
        return {
            // width: 48,
            // height: 48,
            padding: 12,
            backgroundColor: color,
            color: 'white',
            borderRadius: '99px'
        }
    }
    render() {
        return (
            <Card style={this.props.style}>
                <CardTitle title={this.props.title} style={{ padding: '10px 0' }} />
                <div className="info">
                    <p>{this.props.text}</p>

                </div>
            </Card>
        );
    }
}
