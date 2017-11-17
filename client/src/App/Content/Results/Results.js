import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Timeline from '../Timeline/Timeline';
import './Results.css';

import ResultCarousel from './ResultCarousel/ResultCarousel';


@inject("store")
@observer
export default class Results extends Component {
    render() {
        const card_style = {
            transitionDuration: '0.3s',
            height: '100%',
            width: 400
        }

        const subtext = "Brooklyn Workforce Innovations has eight specialized training programs for different job sectors. You’ll get hands-on experience and job placement support for up to two years after graduation. Not sure where to look first? Answer these three questions and we can help you get started on your search for the right program."
        return (
            <div className="results">
                <Timeline />
                <ResultCarousel />
            </div>
        );
    }
}
