import { useState, useRef, useContext } from "react";
import SettingsContext from "../../store/settings-context";
import Switch from "../../UI/Switch";
import Button from "../../UI/Button";
import StyledTaskOptions from "../../components/Tasks/TaskOptions.styled";

const SettingsForm = ({ onClose }) => {
  const settingsCtx = useContext(SettingsContext);

  const [firstTitle, setFirstTitle] = useState(settingsCtx.firstFieldTitle);
  const [secondTitle, setSecondTitle] = useState(settingsCtx.secondFieldTitle);
  const [thirdTitle, setThirdTitle] = useState(settingsCtx.thirdFieldTitle);

  const themeRef = useRef();
  const chartRef = useRef();
  const [firstError, setFirstError] = useState(null);
  const [secondError, setSecondError] = useState(null);
  const [thirdError, setThirdError] = useState(null);

  const optionsSubmitHandler = e => {
    e.preventDefault();
    let validForm = true;
    setFirstError(null);
    setSecondError(null);
    setThirdError(null);

    if (
      firstTitle.trim() === secondTitle.trim() ||
      secondTitle.trim() === thirdTitle.trim() ||
      firstTitle.trim() === thirdTitle.trim()
    ) {
      validForm = false;
      if (firstTitle.trim() === secondTitle.trim()) {
        setFirstError("Fields must be different");
        setSecondError("Fields must be different");
      }
      if (firstTitle.trim() === thirdTitle.trim()) {
        setFirstError("Fields must be different");
        setThirdError("Fields must be different");
      }
      if (secondTitle.trim() === thirdTitle.trim()) {
        setSecondError("Fields must be different");
        setThirdError("Fields must be different");
      }
    }
    if (
      firstTitle.trim() === "" ||
      secondTitle.trim() === "" ||
      thirdTitle.trim() === ""
    ) {
      validForm = false;
      if (firstTitle.trim() === "") setFirstError("Field cannot be empty");
      if (secondTitle.trim() === "") setSecondError("Field cannot be empty");
      if (thirdTitle.trim() === "") setThirdError("Field cannot be empty");
    }
    if (!validForm) {
      return;
    }
    const options = {
      lightMode: themeRef.current.checked,
      verticalChart: chartRef.current.checked,
      firstFieldTitle: firstTitle,
      secondFieldTitle: secondTitle,
      thirdFieldTitle: thirdTitle,
    };
    settingsCtx.setNewValues(options);
    localStorage.setItem("settings", JSON.stringify(options));
    onClose(false);
  };
  const cancelHandler = () => {
    onClose(false);
  };

  return (
    <form onSubmit={optionsSubmitHandler}>
      <Switch
        firstOption="Dark Mode"
        secondOption="Light Mode"
        id="theme"
        title="Theme options"
        ref={themeRef}
        initValue={settingsCtx.lightMode}
      />
      <Switch
        firstOption="Pie chart"
        secondOption="Vertical chart"
        id="chart"
        title="Chart options"
        ref={chartRef}
        initValue={settingsCtx.verticalChart}
      />
      <fieldset>
        <legend>Task options</legend>

        <StyledTaskOptions>
          <input
            type="text"
            id="title1"
            value={firstTitle}
            onChange={e => {
              setFirstTitle(e.target.value);
            }}
          />
          <label htmlFor="title1">First field</label>
          {firstError && <p>{firstError}</p>}
        </StyledTaskOptions>
        <StyledTaskOptions>
          <input
            type="text"
            id="title2"
            value={secondTitle}
            onChange={e => {
              setSecondTitle(e.target.value);
            }}
          />
          <label htmlFor="title2">second field</label>
          {secondError && <p>{secondError}</p>}
        </StyledTaskOptions>
        <StyledTaskOptions>
          <input
            type="text"
            id="title3"
            value={thirdTitle}
            onChange={e => {
              setThirdTitle(e.target.value);
            }}
          />
          <label htmlFor="title3">Third field</label>
          {thirdError && <p>{thirdError}</p>}
        </StyledTaskOptions>
      </fieldset>

      <fieldset>
        <Button type="submit">save</Button>
        <Button type="button" onClick={cancelHandler}>
          cancel
        </Button>
      </fieldset>
    </form>
  );
};

export default SettingsForm;
