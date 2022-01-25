import { useEffect } from "react";

const useStorage = tasks => {
  let totalTasks = 0;

  for (const obj in tasks) {
    totalTasks += tasks[obj].tasks.length;
  }
  useEffect(() => {
    if (totalTasks) {
      localStorage.setItem("savedTasks", JSON.stringify(tasks));
    } else {
      localStorage.removeItem("savedTasks");
    }
  }, [tasks, totalTasks]);
};

export default useStorage;
