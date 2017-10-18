import React, { Component } from 'react';
import './App.css';
import { observer, Provider } from 'mobx-react';
import TopNav from './TopNav/TopNav';

import store from './App.store';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

@observer
class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <TopNav />
            <Sidebar />
            <Content />
          </div>
        </Provider>
    );
  }
}

export default App;