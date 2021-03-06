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

@inject('store')
@observer
export default class Timeline extends Component {
    set_index = (num) => {
        return () => {
            if (AppStore.content === 'questions') {
                QuestionStore.question_index = num
            } else {
                ResultStore.state_index = num
            }
        }
    }

    get_icon_style = (index) => {
        const color_map = [teal500, yellow700, purple500, orange500, brown400]
        let curr_index = (AppStore.content === 'questions') ? QuestionStore.question_index : ResultStore.state_index
        let color = (index === curr_index) ? color_map[index] : grey500
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
        const component_map = {
            'English Level': <ChatBubble onClick={this.set_index(0)} style={this.get_icon_style(0)} />,
            'Career Interest': <AssignmentInd onClick={this.set_index(1)} style={this.get_icon_style(1)} />,
            'Resume Improvement': <ActionDesc onClick={this.set_index(2)} style={this.get_icon_style(2)} />, 'Build Network': <GroupAdd onClick={this.set_index(3)} style={this.get_icon_style(3)} />, 
            'Job Preparation': <Business onClick={this.set_index(4)} style={this.get_icon_style(4)} />
        }

        let timeline_components = []
        
        for (var key in component_map){
            if (this.props.store.content === 'questions' || QuestionStore.answers[key]){
                timeline_components.push(component_map[key])
            }
        }

        return (
            <ul className="timeline">
                {timeline_components.map((component)=>{
                    return <li key={Math.floor(Math.random()*100)}>{component}</li>
                })}
            </ul>
        );
    }
}
