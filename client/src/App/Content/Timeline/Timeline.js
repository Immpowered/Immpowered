import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './Timeline.css';

import { teal500, yellow700, purple500, orange500, brown400, grey500 } from 'material-ui/styles/colors';
import ActionDesc from 'material-ui/svg-icons/action/description';
import ChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import AssignmentInd from 'material-ui/svg-icons/action/assignment-ind';
import GroupAdd from 'material-ui/svg-icons/social/group-add';
import Business from 'material-ui/svg-icons/places/business-center';

import AppStore from '../../App.store';
import QuestionStore from '../Questions/Questions.Store';
import ResultStore from '../Results/Results.Store';

@observer
export default class Timeline extends Component {
    get_icon_style = (index) => {
        const color_map = [teal500, yellow700, purple500, orange500, brown400]
        let curr_index = (AppStore.content == 'questions') ? QuestionStore.question_index : ResultStore.state_index
        let color = (index == curr_index) ?  color_map[index] : grey500
        return {
            width: 48,
            height: 48,
            padding: 12,
            backgroundColor: color,
            color: 'white',
            borderRadius: '99px'
        }
    }
    render() {
        return (
            <ul className="timeline">
                <li><ChatBubble style={this.get_icon_style(0)} /></li>
                <li><AssignmentInd style={this.get_icon_style(1)} /></li>
                <li><ActionDesc style={this.get_icon_style(2)} /></li>
                <li><GroupAdd style={this.get_icon_style(3)} /></li>
                <li><Business style={this.get_icon_style(4)} /></li>
            </ul>
        );
    }
}
