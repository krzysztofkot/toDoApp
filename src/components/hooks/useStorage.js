import { useEffect } from "react";

const useStorage = (tasks, storageItem) => {
  let totalTasks = 0;

  for (const obj in tasks) {
    totalTasks += tasks[obj].tasks.length;
  }
  useEffect(() => {
    if (totalTasks) {
      localStorage.setItem(storageItem, JSON.stringify(tasks));
    } else {
      localStorage.removeItem(storageItem);
    }
  }, [tasks, totalTasks]);
};

export default useStorage;
