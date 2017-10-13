import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';

import ContentContainer from './ContentContainer/ContentContainer';
import TopNav from './TopNav/TopNav';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <ContentContainer />
      </div>
    );
  }
}

export default App;