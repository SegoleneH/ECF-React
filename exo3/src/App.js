import { Component } from 'react';
import { NameList } from './components/NameList';
import './App.css';

class App extends Component {

  state = {
    names: ["emma", "tony", "justine", "sebastien", "alex"]
  }

  render() {  
    const names = this.state;
    return (
      <div>
        <h1>Liste des Noms</h1>
        <NameList names={this.state.names} />
      </div>
    )
  }
}

export default App;
