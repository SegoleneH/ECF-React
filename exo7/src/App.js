import React , { Component } from 'react';
import './App.css';
import ParentComponent from './component/ParentComponent';

// Créez un composant parent ParentComponent qui rend un composant enfant ChildComponent. Le
// parent doit avoir une fonction handleClick qui est passée en tant que prop à l'enfant. L'enfant doit
// avoir un bouton et, lorsqu'il est cliqué, il doit appeler la fonction handleClick du parent. Vous pouvez
// afficher un message à l'écran au clic, ou dans la console.

class App extends Component {

  state = {
    message: ''
}

handleClick = () => {
    this.setState({
        message: 'Hello World'
    })
}
render() {
  
  return (
    <div className="App">
      <ParentComponent message={this.state.message} handleClick={this.handleClick}/>  
    </div>
  );
}
}

export default App;
