import React, { Component } from 'react';
import Form from './component/Form';

class App extends Component {

  state = {
    paragraph: ''
  }

  onChange = (e) => {
    this.setState({
      paragraph: e.target.value
    })
  }
  render () {
    
    return (
      <div className="App">
        <Form paragraph={this.state.paragraph} onChange={this.onChange} />
      </div>
  );
}
}

export default App;
