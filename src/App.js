import React, { Component } from 'react';

import Router from './Router'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="page__container"> 
        <Navigation />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
