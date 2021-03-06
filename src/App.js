import { useState, useEffect, useReducer, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./UI/Global";
import Wrapper from "./UI/Wrapper";
import TaskForm from "./components/NewTask/Forms/TaskForm";
import Container from "./components/Lists/Container";
import Placeholder from "./UI/Placeholder";
import useTitle from "./components/hooks/use-title";
import UseOptions from "./components/hooks/use-options";
import Popup from "./UI/Popup";
import { lightTheme, darkTheme } from "./UI/Theme";

// const theme = {
//   colors: {
//     toDo: "#f6511d",
//     inProgress: "#ffb400",
//     done: "#7fb800",
//     inputFontColor: "#adb5bd",
//     colorPrimary: "#3a4046",
//     colorSecondary: "#343a40",
//     colorTertiary: "#1d2023",
//     colorFourth: "#3f454c",
//   },
//   media: {
//     tablet: "765px",
//   },
// };

let startTasks;

if (!localStorage.getItem("savedTasks")) {
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

const tasksReducer = (prevState, element) => {
  const { action, data } = element;
  if (action === "add") {
    return {
      ...prevState,
      toDo: {
        ...prevState.toDo,
        tasks: [
          ...prevState.toDo.tasks,
          { title: data.title, desc: data.desc, id: data.id },
        ],
      },
    };
  }
  if (action === "delete") {
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
  } else if (action === "move") {
    const currentTask = prevState[data.from].tasks.find(
      el => el.id === parseInt(data.id)
    );
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
  } else return element;
};

function App() {
  const [title, setTitle] = useState("React Tasks Manager");
  const [PopupDisplayed, setPopupDisplayed] = useState(false);

  useTitle(title);

  const [allTasks, dispatchTasks] = useReducer(tasksReducer, startTasks);

  const isLightTheme = UseOptions(allTasks, dispatchTasks);

  useEffect(() => {
    let totalTasks = 0;

    for (const obj in allTasks) {
      totalTasks += allTasks[obj].tasks.length;
    }
    if (totalTasks) {
      localStorage.setItem("savedTasks", JSON.stringify(allTasks));
    } else {
      localStorage.removeItem("savedTasks");
    }
  }, [allTasks]);

  const togglePopupHandler = useCallback(
    boolean => {
      setPopupDisplayed(boolean);
    },
    [PopupDisplayed]
  );
  const modifyTaskHandler = useCallback(option => {
    const { action, data } = option;
    dispatchTasks(option);
    if (action === "add") setTitle("Task added");
    else if (action === "delete") setTitle("Task deleted");
    else if (action === "move")
      setTitle(
        `Moved from  ${allTasks[data.from].title} to ${allTasks[data.to].title}`
      );
  }, []);

  let content;
  if (
    allTasks.toDo.tasks.length > 0 ||
    allTasks.inProgress.tasks.length > 0 ||
    allTasks.done.tasks.length > 0
  ) {
    content = (
      <Container allTasks={allTasks} onModifyTasks={modifyTaskHandler} />
    );
  } else {
    content = <Placeholder>Please add first task</Placeholder>;
  }

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyles />
      {PopupDisplayed && <Popup onTogglePopupHandler={togglePopupHandler} />}
      <Wrapper>
        <TaskForm
          onModifyTasks={modifyTaskHandler}
          onTogglePopupHandler={togglePopupHandler}
        />
        {content}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
