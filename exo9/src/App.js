import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskCounter from './components/TaskCounter';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Courses', completed: false },
    { id: 2, text: 'Vaisselle', completed: false },
    { id: 3, text: 'Aspirateur', completed: false },
  ]);

  const addTask = (text) => {
    const newTask = {id: tasks.length + 1, text, completed: false};
    setTasks([...tasks, newTask]);
  };

  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => { setTasks(tasks.filter((task) => task.id !== id))};

  return (
    <div className='todoList'>
      <h1>ToDo List</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTaskStatus={toggleTaskStatus}
        deleteTask={deleteTask}
      />
      <TaskCounter tasks={tasks} />
    </div>
  );
}

export default App;