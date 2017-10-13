import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './ContentContainer.css';
import Landing from './Landing/Landing';
import PickBackground from './PickBackground/PickBackground';
import ResultPage from './ResultPage/ResultPage';

@inject('store')
@observer
class ContentContainer extends Component {
    render() {
        const component_map = {
            "landing": <Landing />,
            "background": <PickBackground />,
            "results": <ResultPage />
        }
        return (
            <div id="splash">
                {component_map[this.props.store.content]}
            </div>
        );
    }
}

export default ContentContainer;