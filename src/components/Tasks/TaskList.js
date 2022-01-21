import { Droppable } from "react-beautiful-dnd";
import TaskItem from "./TaskItem";

const TaskList = ({ allTasks, onDeleteHandler }) => {
  const deleteHandler = id => {
    onDeleteHandler({
      id,
      title: allTasks.id,
    });
  };
  return (
    <Droppable droppableId={allTasks.id} key={allTasks.id}>
      {(provided, snapshot) => {
        return (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {allTasks.tasks.map(task => (
              <TaskItem
                key={task.id}
                data={task}
                onDeleteHandler={deleteHandler}
                title={allTasks.id}
              ></TaskItem>
            ))}
            {provided.placeholder}
          </ul>
        );
      }}
    </Droppable>
  );
};

export default TaskList;
