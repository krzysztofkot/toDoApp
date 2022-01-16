import { withTheme } from "styled-components";

import TaskList from "../Tasks/TaskList";
import ListWrapper from "./ListWrapper";

const ListsContainer = ({ allTasks, onDeleteTask, theme }) => {
  const tasksArr = [];

  for (const el in allTasks) {
    tasksArr.push({ ...allTasks[el] });
  }
  const deleteHandler = data => {
    onDeleteTask(data);
  };

  return (
    <div>
      {tasksArr.map(el => {
        return (
          <ListWrapper bgc={theme.colors[el.id]} key={el.id}>
            <h2>{el.title}</h2>
            <TaskList allTasks={el} onDeleteHandler={deleteHandler}></TaskList>
          </ListWrapper>
        );
      })}
      {/* <ListWrapper bgc={theme.colors.toDo}>
        <h2>{allTasks.toDo.title}</h2>
        <TaskList
          allTasks={allTasks.toDo}
          onDeleteHandler={deleteHandler}
        ></TaskList>
      </ListWrapper>
      <ListWrapper bgc={theme.colors.inProgress}>
        <h2>{allTasks.inProgress.title}</h2>
        <TaskList
          allTasks={allTasks.inProgress}
          onDeleteHandler={deleteHandler}
        ></TaskList>
      </ListWrapper>
      <ListWrapper bgc={theme.colors.done}>
        <h2>{allTasks.done.title}</h2>
        <TaskList
          allTasks={allTasks.done}
          onDeleteHandler={deleteHandler}
        ></TaskList>
      </ListWrapper> */}
    </div>
  );
};
export default withTheme(ListsContainer);
