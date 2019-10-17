import React, { Component } from 'react';
import AOS from 'aos';

class HomePage extends Component {
  componentDidMount() {
    AOS.init({
      duration: 500,
      once: false
    });
  }

  componentDidUpdate() {
    AOS.refresh();
  }

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default HomePage;
