
import React, { Component } from 'react'

import Header from './components/header'
import Footer from './components/footer'
import Container from './components/container'

export default class Google extends Component {
  render() {
    return (
      <div id="googleMockup">
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}
