function TaskCounter({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const restTasks = totalTasks - completedTasks;

  return (
    <div>
      <p>Tâches totales : {totalTasks}</p>
      <p>Tâches finis : {completedTasks}</p>
      <p>Tâches restantes : {restTasks}</p>
    </div>
  );
}

export default TaskCounter;