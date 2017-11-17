import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import logo from './logo.png';


@inject('store')
@observer
class App extends Component {
  render() {
    return (
            <AppBar 
                onLeftIconButtonTouchTap={this.props.store.toggle_drawer}
                title={<img src={logo} alt="IMMPOWERED"/>}
                iconElementRight={<FlatButton label="Español" />}
                style={{ position: "fixed" , background: "white", border:"none"}}
            />
    );
  }
}

export default App;