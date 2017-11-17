import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import MultipleChoice from './MultipleChoice/MultipleChoice';
import TextArea from './TextArea/TextArea';
import Timeline from '../Timeline/Timeline';
import QuestionStore from './Questions.Store';
import InfoCard from './Info/InfoCard';
import './Questions.css';

const card_style = {
    width: '40vw',
    transitionDuration: '0.3s',
    height: '600px',
    padding: '26px',
    

}

const info_style = {
    margin: '20px',
    width: '30vw',
    height: '600px',
    transitionDuration: '0.3s',
    padding: '26px',
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

const info_map = {
    'English Level': <InfoCard
        title="English Level" style={info_style}
        text="Karla’s lack of English proficiency limited her job options. After attending free English courses taught in the NYC public library for 3 month, she became more confident and was able to access thousands more jobs on the internet on her own."
    />,
    'Career Interest': <InfoCard
        title="Career Interests" style={info_style}
        text="There are programs in NYC that help with job preparation for specific professions. Like Karla, she joined a NYC x Design workshop to get input on how to update her portfolio."
    />,
    'Resume Improvement': <InfoCard
        title="Resume Improvement" style={info_style}
        text="Different countries have different expectations for how your resume should be formated.  Preparing a more American style resume can help with advancing past the original screening process. Kalrs struggled to get a call back for months, despite her impressive work experience, until she learned about American norms and updated her resume at a local workshop."
    />,
    'Build Network': <InfoCard
        title="Build your Network" style={info_style}
        text="Knowing local professionals could exposed you to the latest job openings in the field. Karla broadened her network and received useful career advices from these professionals."
    />,
    'Job Preparation': <InfoCard
        title="Job Preparation" style={info_style}
        text="Job preparation including background research before an interview, interview skills, resume distribution, etc. Get prepared and get exposed to more job opportunities."
    />
}

@inject("store")
@observer
export default class Questions extends Component {
    getCurrentQuestion = () => {
        return component_map[QuestionStore.current_question]
    }
    getCurrentInfo = () => {
        return info_map[QuestionStore.current_question]
    }    
    render() {
        return (
            <div className="questions">
                <Timeline />
                {this.getCurrentQuestion()}
                {this.getCurrentInfo()}
            </div>
        );
    }
}
