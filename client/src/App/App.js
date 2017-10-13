import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';

import Splash from './Splash/Splash';
import TopNav from './TopNav/TopNav';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Splash />
      </div>
    );
  }
}

export default App;