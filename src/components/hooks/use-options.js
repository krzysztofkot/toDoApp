import { useState, useContext, useEffect } from "react";
import SettingsContext from "../../store/settings-context";

const UseOptions = (startTasks, dispatch) => {
  const settingsCtx = useContext(SettingsContext);
  const [columns, setColumns] = useState({
    first: settingsCtx.firstFieldTitle,
    second: settingsCtx.secondFieldTitle,
    third: settingsCtx.thirdFieldTitle,
  });

  const [isLightTheme, setIsLightTheme] = useState(settingsCtx.lightMode);

  useEffect(() => {
    setColumns({
      first: settingsCtx.firstFieldTitle,
      second: settingsCtx.secondFieldTitle,
      third: settingsCtx.thirdFieldTitle,
    });
    setIsLightTheme(settingsCtx.lightMode);
    startTasks.toDo.title = columns.first;
    startTasks.inProgress.title = columns.second;
    startTasks.done.title = columns.third;
    dispatch(startTasks);
  }, [
    columns.first,
    columns.second,
    columns.third,
    settingsCtx.firstFieldTitle,
    settingsCtx.secondFieldTitle,
    settingsCtx.thirdFieldTitle,
    settingsCtx.lightMode,
    dispatch,
    startTasks,
  ]);

  return isLightTheme;
};

export default UseOptions;
