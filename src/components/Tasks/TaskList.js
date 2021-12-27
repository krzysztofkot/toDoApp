import { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = props => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandHandler = id => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ul>
      {props.allTasks.map(task => (
        <TaskItem
          key={task.id}
          onClick={expandHandler}
          isExpanded={isExpanded}
          color={props.bgc}
          data={task}
        ></TaskItem>
      ))}
    </ul>
  );
};

export default TaskList;
