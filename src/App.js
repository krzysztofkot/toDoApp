import { useState } from "react";

import Container from "./UI/Container";
import TaskForm from "./components/NewTask/TaskForm";
import ListsContainer from "./components/Lists/ListsContainer";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = task => {
    const id = Date.now().toString().slice(6);
    task.id = id;
    setTasks(allTasks => {
      return [...allTasks, task];
    });
  };

  let content = <p style={{ textAlign: "center" }}>Please add first goal!</p>;

  if (tasks.length > 0) {
    content = <ListsContainer allTasks={tasks} />;
  }

  return (
    <Container>
      <TaskForm onAddTask={addTaskHandler} />
      {content}
    </Container>
  );
}

export default App;
