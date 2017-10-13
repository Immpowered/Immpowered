import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';

import TopNav from './TopNav/TopNav.jsx';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
      </div>
    );
  }
}

export default App;