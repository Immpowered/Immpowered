import React, { Component } from 'react';
import { observer } from 'mobx-react';
import logo from '../logo.svg';
import './TopNav.css';

@observer
class TopNav extends Component {
  render() {
    const links = ['About', 'Favorite', 'FAQ', 'Contact'];

    return (
      <div className="top-nav">
        <img id="logo" src={logo} />
        <div className="nav-container">
          <ul className="nav-menu">
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