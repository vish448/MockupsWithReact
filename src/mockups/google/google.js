
import React, { Component } from 'react'

import Header from './components/header'
import Footer from './components/footer'
import Container from './components/container'

export default class Google extends Component {
  render() {
    return (
      <div id="googleMockup">
        <h1>google</h1>

        // TODO: Dump components
        /*
          Local header
            Navigation Left
            Navigation Right
          Container
            Google logo
            Search Bar
            Buttons
          Footer
            Country Footer
            FooterNavigation Left
            FooterNavigation Right

        */
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}
