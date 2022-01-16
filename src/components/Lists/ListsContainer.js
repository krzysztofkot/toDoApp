import { withTheme } from "styled-components";

import TaskList from "../Tasks/TaskList";
import ListWrapper from "./ListWrapper";
import Filter from "../Filter/Filter";
import { useState } from "react";

const ListsContainer = ({ allTasks, onDeleteTask, theme }) => {
  const [filterOption, setFilterOption] = useState("all");
  let tasksArr = [];

  if (filterOption === "all") {
    for (const el in allTasks) {
      tasksArr.push({ ...allTasks[el] });
    }
  } else {
    tasksArr = [allTasks[filterOption]];
  }

  const filterOptionsHandler = option => {
    console.log(`Hello Im in list container ${option}`);
    setFilterOption(option);
  };

  const deleteHandler = data => {
    console.log(data);
    console.log(allTasks[data.title].tasks.length);
    if (allTasks[data.title].tasks.length === 1) {
      setFilterOption("all");
    }
    onDeleteTask(data);
  };

  return (
    <div>
      <Filter allTasks={allTasks} onFilterOptions={filterOptionsHandler} />
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
