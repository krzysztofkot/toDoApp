import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SettingsProvider from "./store/SettingsProvider";

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
