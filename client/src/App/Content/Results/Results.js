import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Timeline from '../Timeline/Timeline';
import './Results.css';

import ResultCarousel from './ResultCarousel/ResultCarousel';

@observer
export default class Results extends Component {
    render() {
        return (
            <div className="results">
                <Timeline />
                <ResultCarousel />
            </div>
        );
    }
}
