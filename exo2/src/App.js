import React from 'react';
import { Greeting } from './Components/Greeting';
import { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    name: ""
  }
  

  handleSubmit = (event) => {
    const inputName = event.target.value;
    this.setState({name: inputName})
    console.log(inputName)
  }

  render() {
    return (
      <div>
        <form>
          <input onChange={this.handleSubmit} type="text"></input>
        </form>
        
        <Greeting names= {this.state.name}/>

      </div>
    )
  }
}

export default App;
