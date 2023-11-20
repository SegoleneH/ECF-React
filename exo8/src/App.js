import React, { useState } from 'react';
import List from './components/List';
import Button from './components/Button';
import Title from './components/Title';

function App() {
  const [items, setItems] = useState(['Bob', 'Alice', 'Toto', 'Titi']);

  const addItem = () => {
    const newItem = prompt('Entrez un nouveau nom :');
    if (newItem) {
      setItems([...items, newItem]);
    }
  };

  return (
    <div>
      <Title text="Ma liste de nom" />
      <Button onClick={addItem} label="Ajoutez un nom" />
      <List items={items} />
    </div>
  );
}

export default App;