import TaskList from "../Tasks/TaskList";
import ListWrapper from "./ListWrapper";

const ListsContainer = props => {
  return (
    <div>
      <ListWrapper bgc="var(--toDo)">
        <h2>To do</h2>
        <TaskList
          allTasks={props.toDoTasks}
          title="to do"
          bgc="var(--toDo)"
        ></TaskList>
      </ListWrapper>
      <ListWrapper bgc="var(--inProgress)">
        <h2>In progress</h2>
        <TaskList
          allTasks={props.inProgressTasks}
          title="in progress"
          bgc="var(--inProgress)"
        ></TaskList>
      </ListWrapper>
      <ListWrapper bgc="var(--done)">
        <h2>Done</h2>
        <TaskList
          allTasks={props.doneTasks}
          title="in progress"
          bgc="var(--inProgress)"
        ></TaskList>
      </ListWrapper>
    </div>
  );
};
export default ListsContainer;
