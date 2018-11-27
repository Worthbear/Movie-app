import React, { Component } from 'react';
import Logo from './images/Moviepicker.png';
class Header extends Component {
  render() {
    return (
        <div className="header" >
        <img className="logo" src={Logo} alt="Moviepicker"/>
        </div>
    );
  }
}

export default Header;
