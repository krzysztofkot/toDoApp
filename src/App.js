import { useState } from "react";

import Container from "./UI/Container";
import TaskForm from "./components/NewTask/TaskForm";
import ListsContainer from "./components/Lists/ListsContainer";

// const startTasks = [
//   {
//     id: 134,
//     title: "Lorem ipsum dolor sit amet 1",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint maiores porro labore quae, cumque totam possimus saepe distinctio sequi ea, commodi necessitatibus tempore ipsum ut obcaecati minus enim. Facilis?",
//   },
//   {
//     id: 2112,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, harum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto vel natus adipisci?",
//   },
// ];

const startTasks = {
  toDo: [
    {
      id: 134,
      title: "Lorem ipsum dolor sit amet 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint maiores porro labore quae, cumque totam possimus saepe distinctio sequi ea, commodi necessitatibus tempore ipsum ut obcaecati minus enim. Facilis?",
    },
    {
      id: 2112,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, harum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto vel natus adipisci?",
    },
  ],
  inProgress: [
    {
      id: 134,
      title: "Lorem ipsum dolor sit amet 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint maiores porro labore quae, cumque totam possimus saepe distinctio sequi ea, commodi necessitatibus tempore ipsum ut obcaecati minus enim. Facilis?",
    },
    {
      id: 2112,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, harum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto vel natus adipisci?",
    },
  ],
  done: [
    {
      id: 134,
      title: "Lorem ipsum dolor sit amet 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint maiores porro labore quae, cumque totam possimus saepe distinctio sequi ea, commodi necessitatibus tempore ipsum ut obcaecati minus enim. Facilis?",
    },
    {
      id: 2112,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, harum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto vel natus adipisci?",
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

  let content = <p style={{ textAlign: "center" }}>Please add first goal!</p>;
  if (
    allTasks.toDo.length > 0 ||
    allTasks.inProgress.length > 0 ||
    allTasks.done.length > 0
  ) {
    content = (
      <ListsContainer
        toDoTasks={allTasks.toDo}
        inProgressTasks={allTasks.inProgress}
        doneTasks={allTasks.done}
      />
    );
  }

  return (
    <Container>
      <TaskForm onAddTask={addTaskHandler} />
      {content}
    </Container>
  );
}

export default App;
