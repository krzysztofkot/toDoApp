import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import IconWrapper from "../../UI/IconWrapper";
import ListEl from "../Lists/ListEl";
import TaskTitle from "./TaskTitle";

const TaskItem = ({ data, onDeleteHandler, filter }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const deleteTask = () => {
    onDeleteHandler(data.id);
  };

  const expandHandler = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Draggable
      key={data.id}
      draggableId={`${data.id}`}
      index={data.id}
      isDragDisabled={filter !== "all" ? true : false}
    >
      {(provided, snapshot) => {
        return (
          <li
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <ListEl>
              <div>
                <TaskTitle onClick={expandHandler}>
                  <IconWrapper rotation={isExpanded}>
                    <IoIosArrowDown size={20} />
                  </IconWrapper>
                  <h3>{data.title}</h3>
                </TaskTitle>
                <IconWrapper onClick={deleteTask}>
                  <FaTrashAlt />
                </IconWrapper>
              </div>
              <p className={isExpanded ? "expanded" : null}>{data.desc}</p>
            </ListEl>
          </li>
        );
      }}
    </Draggable>
  );
};

export default TaskItem;
