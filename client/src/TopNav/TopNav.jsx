import React, { Component } from 'react';
import { observer } from 'mobx-react';
import logo from '../logo.svg';

@observer
class TopNav extends Component {
  render() {
    let links = ['About', 'Favorite', 'FAQ', 'Contact'];

    return (
      <div className="top-nav">
        <div id="logo"><img src={logo} /></div>
      	<ul className="nav-menu">
          {links.map(function(name, index){
            return <li key={name} ><a href="/">{ name }</a></li>
          })}
      	</ul>
      </div>
    );
  }
}

export default TopNav;