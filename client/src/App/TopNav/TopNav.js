import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import logo from '../logo.svg';
import './TopNav.css';

@inject('store')
@observer
class TopNav extends Component {
  onClick = (event) => {
    this.props.store.change_language()
  }
  render() {
    const links = ['About', 'Favorite', 'FAQ', 'Contact'];

    return (
      <div className="top-nav">
        <img id="logo" src={logo} />
        <div className="nav-container">
          <ul className="nav-menu">
            <li key="language"><a onClick={this.onClick}>{this.props.store.language == 'English' ? 'Español': 'English'}</a></li>
            {links.map(function(name, index){
              return <li key={name} ><a href="/">{ name }</a></li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default TopNav;