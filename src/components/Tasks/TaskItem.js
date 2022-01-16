import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import IconWrapper from "../../UI/IconWrapper";
import ListEl from "../Lists/ListEl";
import TaskTitle from "./TaskTitle";

const TaskItem = props => {
  const [isExpanded, setIsExpanded] = useState(false);

  const deleteTask = () => {
    props.onDeleteHandler(props.data.id);
  };

  const expandHandler = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <ListEl>
      <div>
        <TaskTitle onClick={expandHandler}>
          <IconWrapper rotation={isExpanded}>
            <IoIosArrowDown size={20} />
          </IconWrapper>
          <h3>{props.data.title}</h3>
        </TaskTitle>
        <IconWrapper onClick={deleteTask}>
          <FaTrashAlt />
        </IconWrapper>
      </div>
      <p className={isExpanded ? "expanded" : null}>{props.data.desc}</p>
    </ListEl>
  );
};

export default TaskItem;
