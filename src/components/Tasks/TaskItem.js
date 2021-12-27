import { useState } from "react";
import ListEl from "../Lists/ListEl";

const TaskItem = props => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandHandler = id => {
    setIsExpanded(!isExpanded);
  };
  return (
    <ListEl onClick={expandHandler}>
      <h3>{props.data.title}</h3>
      <p className={isExpanded ? "expanded" : null}>{props.data.desc}</p>
    </ListEl>
  );
};

export default TaskItem;
