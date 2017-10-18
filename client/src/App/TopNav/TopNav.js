import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

@inject('store')
@observer
class App extends Component {
  render() {
    return (
            <AppBar 
                title="IMMPOWERED" 
                onLeftIconButtonTouchTap={this.props.store.toggle_drawer}
                iconElementRight={<FlatButton label="Login" />}
                style={{ position: "fixed" }}
            />
    );
  }
}

export default App;