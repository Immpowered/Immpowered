import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Landing from './Landing/Landing';
import './Content.css';

@inject('store')
@observer
class Content extends Component {
    render() {
        const component_map = {
            "landing": <Landing />
        }
        return (
            <div id="splash">
                {component_map[this.props.store.content]}
            </div>
        );
    }
}

export default Content;