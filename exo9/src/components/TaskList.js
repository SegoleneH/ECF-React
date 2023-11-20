import Task from './Task';
import '../App.css';

function TaskList({ tasks, toggleTaskStatus, deleteTask }) {
  return (
    <ul 
    className='list'>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTaskStatus={toggleTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;