import { useState } from "react";
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

const startTasks = {
  toDo: {
    tasks: [
      {
        id: 139004,
        title: "Lorem ipsum dolor ",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint maiores  saepe distinctio sequi ea, commodi necessitatibus tempore ipsum ut obcaecati minus enim. Facilis?",
      },
    ],
    title: "To do",
    id: "toDo",
  },
  inProgress: {
    tasks: [
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
    title: "In progress",
    id: "inProgress",
  },
  done: {
    tasks: [
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
    title: "Done",
    id: "done",
  },
};
// const startTasks2 = {
//   toDo: [],
//   inProgress: [],
//   done: [],
// };

function App() {
  const [allTasks, setAllTasks] = useState(startTasks);

  const addTaskHandler = task => {
    const id = Date.now().toString().slice(6);
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
    console.log(id, title);
    setAllTasks(prevState => {
      return {
        ...prevState,
        [title]: {
          ...prevState[title],
          tasks: prevState[title].tasks.filter(el => el.id !== id),
        },
        // toDo: {
        //   ...prevState.toDo,
        // },
        // inProgress: {
        //   ...prevState.inProgress,
        // },
        // done: {
        //   ...prevState.done,
        // },
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
      <Container allTasks={allTasks} onDeleteTask={deleteTaskHandler} />
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
