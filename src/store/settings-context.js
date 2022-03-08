import React from "react";

const SettingsContext = React.createContext({
  lightMode: null,
  verticalChart: null,
  firstFieldTitle: "",
  secondFieldTitle: "",
  thirdFieldTitle: "",
  setNewValues: () => {},
});

export default SettingsContext;
