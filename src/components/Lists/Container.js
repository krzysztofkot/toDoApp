import { withTheme } from "styled-components";

import TaskList from "../Tasks/TaskList";
import ListWrapper from "./ListWrapper";
import Filter from "../Filter/Filter";
import Chart from "../Chart/Chart";
import { useState } from "react";

const Container = ({ allTasks, onDeleteTask, theme }) => {
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
      <Chart allTasks={allTasks} filter={filterOption}></Chart>
      {tasksArr.map(el => {
        return (
          <ListWrapper bgc={theme.colors[el.id]} key={el.id}>
            <h2>{el.title}</h2>
            <TaskList allTasks={el} onDeleteHandler={deleteHandler}></TaskList>
          </ListWrapper>
        );
      })}
    </div>
  );
};
export default withTheme(Container);
