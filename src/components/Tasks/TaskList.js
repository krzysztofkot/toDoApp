import TaskItem from "./TaskItem";

const TaskList = ({ allTasks, onDeleteHandler }) => {
  const deleteHandler = id => {
    console.log(allTasks.id);
    onDeleteHandler({
      id,
      title: allTasks.id,
    });
  };
  return (
    <ul>
      {allTasks.tasks.map(task => (
        <TaskItem
          key={task.id}
          data={task}
          onDeleteHandler={deleteHandler}
        ></TaskItem>
      ))}
    </ul>
  );
};

export default TaskList;
