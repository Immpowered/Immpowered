import React, { Component } from 'react';
import { observer, Provider } from 'mobx-react';

import './ContentContainer.css';
import ContentContainerStore from './ContentContainer.store';
import Landing from './Landing/Landing';
import PickBackground from './PickBackground/PickBackground';

const store = new ContentContainerStore();

@observer
class ContentContainer extends Component {
    render() {
        const component_map = {
            "landing": <Landing />,
            "background": <PickBackground />
        }
        return (
            <Provider store={store}>
                <div id="splash">
                    { component_map[store.content] }
                </div>
            </Provider>
        );
    }
}

export default ContentContainer;