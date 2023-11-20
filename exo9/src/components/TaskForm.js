import { useState } from 'react';
import '../App.css'

function TaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text) {
      addTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button className="add" type="submit">+</button>
    </form>
  );
}

export default TaskForm;