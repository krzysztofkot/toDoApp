import { useEffect } from "react";

const useTitle = text => {
  useEffect(() => {
    document.title = text;
    setTimeout(() => {
      document.title = "React Task Manager";
    }, 5000);
  });
};

export default useTitle;
