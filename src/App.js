import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./UI/Global";
import Wrapper from "./UI/Wrapper";
import TaskForm from "./components/NewTask/Forms/TaskForm";
import Container from "./components/Lists/Container";
import Placeholder from "./UI/Placeholder";

const theme = {
  colors: {
    toDo: "#f6511d",
    inProgress: "#ffb400",
    done: "#7fb800",
    inputFontColor: "#adb5bd",
    colorPrimary: "#3a4046",
    colorSecondary: "#343a40",
    colorTertiary: "#1d2023",
    colorFourth: "#3f454c",
  },
  media: {
    tablet: "765px",
  },
};

let startTasks;

if (localStorage.getItem("savedTasks") === null) {
  startTasks = {
    toDo: {
      tasks: [],
      title: "To do",
      id: "toDo",
    },
    inProgress: {
      tasks: [],
      title: "In progress",
      id: "inProgress",
    },
    done: {
      tasks: [],
      title: "Done",
      id: "done",
    },
  };
} else {
  startTasks = JSON.parse(localStorage.getItem("savedTasks"));
}

const saveTasksToStorage = tasks => {
  localStorage.setItem("savedTasks", JSON.stringify(tasks));
};

function App() {
  const [allTasks, setAllTasks] = useState(startTasks);

  useEffect(() => {
    saveTasksToStorage(allTasks);
  }, [allTasks]);

  const addTaskHandler = task => {
    const id = parseInt(Date.now().toString().slice(6));
    task.id = id;

    setAllTasks(prevState => {
      return {
        ...prevState,
        toDo: {
          ...prevState.toDo,
          tasks: [...prevState.toDo.tasks, task],
        },
      };
    });
  };

  const deleteTaskHandler = task => {
    const { id, title } = task;
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
        [title]: {
          ...prevState[title],
          tasks: prevState[title].tasks.filter(el => el.id !== id),
        },
      };
    });
  };

  const moveTaskHandler = ({ from, to, id }) => {
    const currentTask = allTasks[from].tasks.find(el => el.id === parseInt(id));

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
        [from]: {
          ...prevState[from],
          tasks: prevState[from].tasks.filter(el => el.id !== parseInt(id)),
        },
        [to]: {
          ...prevState[to],
          tasks: [...prevState[to].tasks, currentTask],
        },
      };
    });
  };

  let content;
  if (
    allTasks.toDo.tasks.length > 0 ||
    allTasks.inProgress.tasks.length > 0 ||
    allTasks.done.tasks.length > 0
  ) {
    content = (
      <Container
        allTasks={allTasks}
        onDeleteTask={deleteTaskHandler}
        onMoveTask={moveTaskHandler}
      />
    );
  } else {
    content = <Placeholder>Please add first task</Placeholder>;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <TaskForm onAddTask={addTaskHandler} />
        {content}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
