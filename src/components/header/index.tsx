import React, { Component } from 'react';

import Logo from './logo';
import Tabs from './tabs';

class Header extends React.Component {
  render() {
    return (
      <header>
          <Logo className="john-logo" id="cardHover" />
          <Tabs className="navigation" />
      </header>
    );
  }
}

export default Header;