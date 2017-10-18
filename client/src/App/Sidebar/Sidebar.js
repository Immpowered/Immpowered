import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

@inject('store')
@observer
class Sidebar extends Component {
    close_drawer = (evt) => {
        this.props.store.toggle_drawer()
    }
    render() {
        return (
            <Drawer open={this.props.store.drawer.open} >
                <IconButton>
                    <NavigationClose onClick={this.close_drawer}/>
                </IconButton>
                <Avatar />
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
            </ Drawer>
        );
    }
}

export default Sidebar;