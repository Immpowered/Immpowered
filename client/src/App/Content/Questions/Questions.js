import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import MultipleChoice from './MultipleChoice/MultipleChoice';
import TextArea from './TextArea/TextArea';
import './Questions.css';
import QuestionStore from './Questions.Store';

const card_style = {
    width: '600px',
    transitionDuration: '0.3s',
    height: '700px',
    padding: '26px'
}

const component_map = {
    'English Level': <MultipleChoice
            title="English Level" style={card_style}
            label="Do you need help improving your english?"
        />,
    'Career Interest': <TextArea
            title="Career Interests" style={card_style}
            label="What is your primary field of interest?"
            hint_text="e.g. Civil Engineering, Accounting, Illustration, Finance"
        />,
    'Resume Improvement': <MultipleChoice
            title="Resume Improvement" style={card_style}
            label="Do you want help creating or improving your resume?"
        />,
    'Build Network': <MultipleChoice
        title="Build your Network" style={card_style}
        label="Do you want to connect with local professionals?"
    />,
    'Job Preparation': <MultipleChoice
    title="Job Preparation" style={card_style}
    label="Do you want assistance with job preparation and placement?"
/>
}

@inject("store")
@observer
export default class Questions extends Component {
    getCurrentQuestion = () => {
        return component_map[QuestionStore.current_question]
    }
    render() {
        return (
            <div className="questions">
                {this.getCurrentQuestion()}
            </div>
        );
    }
}
