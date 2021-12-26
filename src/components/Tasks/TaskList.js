import { useState } from "react";
import TaskItem from "./TaskItem";
const TaskList = props => {
  const [allTasks, setAllTasks] = useState(props.allTasks);

  return (
    <ul>
      {allTasks.map(task => (
        <TaskItem title={task.title} desc={task.desc} key={task.id} />
      ))}
    </ul>
  );
};

export default TaskList;
