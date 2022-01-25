import { useState } from "react";

const useTasks = (tasks, option, data) => {
  const [allTasks, setAllTasks] = useState(tasks);
  if (option === "add") {
    setAllTasks(prevState => {
      return {
        ...prevState,
        toDo: {
          ...prevState.toDo,
          tasks: [
            ...prevState.toDo.tasks,
            { title: data.title, desc: data.desc },
          ],
        },
      };
    });
  } else if (option === "delete") {
    setAllTasks(prevState => {
      return {
        ...prevState,

        toDo: {
          ...prevState.toDo,
        },
        inProgress: {
          ...prevState.inProgress,
        },
        done: {
          ...prevState.done,
        },
        [data.from]: {
          ...prevState[data.from],
          tasks: prevState[data.from].tasks.filter(el => el.id !== data.id),
        },
      };
    });
  } else if (option === "move") {
    const currentTask = allTasks[data.from].tasks.find(
      el => el.id === parseInt(data.id)
    );

    setAllTasks(prevState => {
      return {
        ...prevState,

        toDo: {
          ...prevState.toDo,
        },
        inProgress: {
          ...prevState.inProgress,
        },
        done: {
          ...prevState.done,
        },
        [data.from]: {
          ...prevState[data.from],
          tasks: prevState[data.from].tasks.filter(
            el => el.id !== parseInt(data.id)
          ),
        },
        [data.to]: {
          ...prevState[data.to],
          tasks: [...prevState[data.to].tasks, currentTask],
        },
      };
    });
  }
  return allTasks;
};

export default useTasks;
