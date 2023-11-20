import React, { Component } from 'react';
import Section from './components/Section';
import Counter from '../src/components/Counter';
import './App.css';

class App extends Component {
  state = {
    boutonCount: 0,
  };

  handleCount = () => {
    this.setState({ boutonCount: this.state.boutonCount + 1 });
  };

  render() {
    return (
      <div>
        <Section handleCount = {this.handleCount}/>
        <Section handleCount = {this.handleCount}/>
        <Section handleCount = {this.handleCount}/>
        <Section handleCount = {this.handleCount}/>
  
        <Counter boutonCount = {this.state.boutonCount} />
      </div>
    );
  }
}

export default App;
