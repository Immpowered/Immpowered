import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Landing from './Landing/Landing';
import Questions from './Questions/Questions';
import Results from './Results/Results';
import './Content.css';

@inject('store')
@observer
class Content extends Component {
    render() {
        const component_map = {
            "landing": <Landing />,
            "questions": <Questions />,
            "results": <Results />
        }
        return (
            <div id="splash">
                {component_map[this.props.store.content]}
            </div>
        );
    }
}

export default Content;