import React, { Component } from 'react';
import ConditionalRender from './components/ConditionalRender'

class App extends Component {
  
  state = {
    userResponse: '',
  };

  handleUserResponseChange = (event) => {
    this.setState({ userResponse: event.target.value });
  }

  render() {
    const oui = this.state.userResponse.toLowerCase() === 'oui';

    return (

      <div>
        <h1>Aimez-vous React ?</h1>

        <label>
          <input
            type="radio"
            value="Oui"
            checked={this.state.userResponse === 'Oui'}
            onChange={this.handleUserResponseChange}
          />
          Oui
        </label>

        <label>
          <input
            type="radio"
            value="Non"
            checked={this.state.userResponse === 'Non'}
            onChange={this.handleUserResponseChange}
          />
          Non
        </label>

        <ConditionalRender condition={oui} />

      </div>
    );
  }
}
export default App;