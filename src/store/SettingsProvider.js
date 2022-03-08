import { useState } from "react";
import SettingsContext from "./settings-context";

let settings;

if (!localStorage.getItem("settings")) {
  settings = {
    lightMode: false,
    verticalChart: false,
    firstFieldTitle: "To do",
    secondFieldTitle: "In progress",
    thirdFieldTitle: "Done",
  };
} else {
  settings = JSON.parse(localStorage.getItem("settings"));
}
const SettingsProvider = props => {
  const [settingsValue, setSettingsValue] = useState(settings);

  const setNewValues = options => {
    setSettingsValue(options);
  };

  const settingContext = {
    ...settingsValue,
    setNewValues,
  };

  return (
    <SettingsContext.Provider value={settingContext}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
