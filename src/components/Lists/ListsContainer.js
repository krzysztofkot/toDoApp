import { withTheme } from "styled-components";

import TaskList from "../Tasks/TaskList";
import ListWrapper from "./ListWrapper";

const ListsContainer = props => {
  return (
    <div>
      <ListWrapper bgc={props.theme.colors.toDo}>
        <h2>To do</h2>
        <TaskList allTasks={props.allTasks.toDo} title="toDo"></TaskList>
      </ListWrapper>
      <ListWrapper bgc={props.theme.colors.inProgress}>
        <h2>In progress</h2>
        <TaskList
          allTasks={props.allTasks.inProgress}
          title="inProgress"
        ></TaskList>
      </ListWrapper>
      <ListWrapper bgc={props.theme.colors.done}>
        <h2>Done</h2>
        <TaskList allTasks={props.allTasks.done} title="done"></TaskList>
      </ListWrapper>
    </div>
  );
};
export default withTheme(ListsContainer);
