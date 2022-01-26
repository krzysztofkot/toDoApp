import { useEffect, useState } from "react";
import useTitle from "../hooks/use-title";
import { DragDropContext } from "react-beautiful-dnd";
import { withTheme } from "styled-components";
import TaskList from "../Tasks/TaskList";
import ListWrapper from "./ListWrapper";
import Filter from "../Filter/Filter";
import Chart from "../Chart/Chart";

let activeFilter;

if (!localStorage.getItem("savedFilter")) {
  activeFilter = "all";
} else activeFilter = JSON.parse(localStorage.getItem("savedFilter"));

const Container = ({ allTasks, onDeleteTask, theme, onMoveTask }) => {
  const [filterOption, setFilterOption] = useState(activeFilter);
  console.log("rendered container");
  let tasksArr = [];
  useTitle(
    `Active filter: ${
      filterOption === "all" ? "all" : allTasks[filterOption].title
    }`
  );

  useEffect(() => {
    console.log("saved in storage");
    localStorage.setItem("savedFilter", JSON.stringify(filterOption));
    return () => {
      console.log("local storage cleaned");
      localStorage.removeItem("savedFilter");
    };
  }, [filterOption]);

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
    if (allTasks[data.title].tasks.length === 1) {
      setFilterOption("all");
    }
    onDeleteTask(data);
  };

  const dragEndHandler = ({ draggableId, destination, source }) => {
    if (destination && source.droppableId !== destination.droppableId) {
      onMoveTask({
        from: source.droppableId,
        to: destination.droppableId,
        id: draggableId,
      });
    }
  };

  return (
    <div>
      <Filter
        allTasks={allTasks}
        onFilterOptions={filterOptionsHandler}
        filter={filterOption}
        role={"filter"}
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
