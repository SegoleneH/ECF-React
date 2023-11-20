import '../App.css';
function Task({ task, deleteTask, toggleTaskStatus }) {
  return (
    <li>
      <input
        className="checkbox"
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskStatus(task.id)}
      />
      {task.text}
      <button className="delete" onClick={() => deleteTask(task.id)}>X</button>
    </li>
  );
}

export default Task;