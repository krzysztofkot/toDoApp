import { useState } from "react";
import useTitle from "../hooks/use-title";
import { DragDropContext } from "react-beautiful-dnd";
import { withTheme } from "styled-components";
import TaskList from "../Tasks/TaskList";
import ListWrapper from "./ListWrapper";
import Filter from "../Filter/Filter";
import Chart from "../Chart/Chart";

const Container = ({ allTasks, onModifyTasks, theme }) => {
  const [filterOption, setFilterOption] = useState("all");
  let tasksArr = [];
  useTitle(
    `Active filter: ${
      filterOption === "all" ? "all" : allTasks[filterOption].title
    }`
  );

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
    if (allTasks[data.from].tasks.length === 1) {
      setFilterOption("all");
    }
    onModifyTasks({
      action: "delete",
      data,
    });
  };

  const dragEndHandler = ({ draggableId, destination, source }) => {
    if (destination && source.droppableId !== destination.droppableId) {
      onModifyTasks({
        action: "move",
        data: {
          from: source.droppableId,
          to: destination.droppableId,
          id: draggableId,
        },
      });
    }
  };

  return (
    <div>
      <Filter
        allTasks={allTasks}
        onFilterOptions={filterOptionsHandler}
        filter={filterOption}
        role="filter"
      />
      <Chart allTasks={allTasks} filter={filterOption}></Chart>
      <DragDropContext onDragEnd={dragEndHandler}>
        {tasksArr.map(el => {
          return (
            <ListWrapper
              bgc={theme.colors[el.id]}
              key={el.id}
              data-testid={el.id}
            >
              <h2>{el.title}</h2>
              <TaskList
                allTasks={el}
                onDeleteHandler={deleteHandler}
                filter={filterOption}
              ></TaskList>
            </ListWrapper>
          );
        })}
      </DragDropContext>
    </div>
  );
};
export default withTheme(Container);
