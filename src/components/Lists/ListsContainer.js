import TaskList from "../Tasks/TaskList";
const ListsContainer = props => {
  return (
    <div>
      <TaskList allTasks={props.allTasks}></TaskList>
    </div>
  );
};
export default ListsContainer;
