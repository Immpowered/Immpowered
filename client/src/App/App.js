import React, { Component } from 'react';
import './App.css';
import { observer, Provider } from 'mobx-react';

import AppStore from './App.store';
import ContentContainer from './ContentContainer/ContentContainer';
import TopNav from './TopNav/TopNav';

const store = new AppStore();

@observer
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TopNav />
          <ContentContainer />
        </div>
      </Provider>
    );
  }
}

export default App;