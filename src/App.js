import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./UI/Global";
import Container from "./UI/Container";
import TaskForm from "./components/NewTask/Forms/TaskForm";
import ListsContainer from "./components/Lists/ListsContainer";

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
};

const startTasks = {
  toDo: [
    {
      id: 139004,
      title: "Lorem ipsum dolor ",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint maiores  saepe distinctio sequi ea, commodi necessitatibus tempore ipsum ut obcaecati minus enim. Facilis?",
    },
  ],
  inProgress: [
    {
      id: 136674,
      title: "Lorem ipsum dolor sit amet 15688",
      desc: "Lorem ipsum dolor ssicing elit. Voluptas sint maiores porro labore quae, cumque totam possimus saepe distinctio sequi ea, commodi necessitatibus tempore ipsum ut obcaecati minus enim. Facilis?",
    },
    {
      id: 13434345,
      title: "Lorem ipsum dolor sit amet 3242234 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint maiores porro labore quae, cumque totam possimus saepe distinctio sequi ea, commodi necessitatibus tempore ipsum ut obcaecati minus enim. Facilis?",
    },
    {
      id: 21124212,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, harum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto vel natus adipisci?",
    },
  ],
  done: [
    {
      id: 211245,
      title: "Lorem ipsum dolor sit 23455767",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, harum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto vel natus adipisci?",
    },
    {
      id: 134345,
      title: "Lorem ipsum ",
      desc: "Lorem ipsumm possimus saepe distinctio sequi ea, commodi necessitatibus tempore ipsum ut obcaecati minus enim. Facilis?",
    },
  ],
};
const startTasks2 = {
  toDo: [],
  inProgress: [],
  done: [],
};

function App() {
  const [allTasks, setAllTasks] = useState(startTasks);

  const addTaskHandler = task => {
    const id = Date.now().toString().slice(6);
    task.id = id;

    setAllTasks(prevState => {
      return {
        ...prevState,
        toDo: [...prevState.toDo, task],
      };
    });
  };

  let content;
  if (
    allTasks.toDo.length > 0 ||
    allTasks.inProgress.length > 0 ||
    allTasks.done.length > 0
  ) {
    content = <ListsContainer allTasks={allTasks} />;
  } else {
    content = <p style={{ textAlign: "center" }}>Please add first task</p>;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <TaskForm onAddTask={addTaskHandler} />
        {content}
      </Container>
    </ThemeProvider>
  );
}

export default App;
