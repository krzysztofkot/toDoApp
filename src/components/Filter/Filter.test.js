import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import Filter from "./Filter";
import {
  toDoData,
  inProgressData,
  doneData,
  allData,
  theme,
} from "../../test-data/testData";

describe("Filter component", () => {
  it("Should have only 2 filter options: all and to do", () => {
    render(
      <ThemeProvider theme={theme}>
        <Filter allTasks={toDoData} />;
      </ThemeProvider>
    );

    const options = screen.queryAllByTestId("option");
    expect(options).toHaveLength(2);
    expect(options[0]).toHaveValue("all");
    expect(options[1]).toHaveValue(toDoData.toDo.id);
    expect(options[0]).toHaveTextContent(/all/i);
    expect(options[1]).toHaveTextContent(toDoData.toDo.title);
  });

  it("Should have only 2 filter options: all and in progress", () => {
    render(
      <ThemeProvider theme={theme}>
        <Filter allTasks={inProgressData} />;
      </ThemeProvider>
    );

    const options = screen.queryAllByTestId("option");
    expect(options).toHaveLength(2);
    expect(options[0]).toHaveValue("all");
    expect(options[1]).toHaveValue(inProgressData.inProgress.id);
    expect(options[0]).toHaveTextContent(/all/i);
    expect(options[1]).toHaveTextContent(inProgressData.inProgress.title);
  });

  it("Should have only 2 filter options: all and done", () => {
    render(
      <ThemeProvider theme={theme}>
        <Filter allTasks={doneData} />;
      </ThemeProvider>
    );

    const options = screen.queryAllByTestId("option");
    expect(options).toHaveLength(2);
    expect(options[0]).toHaveValue("all");
    expect(options[1]).toHaveValue(doneData.done.id);
    expect(options[0]).toHaveTextContent(/all/i);
    expect(options[1]).toHaveTextContent(doneData.done.title);
  });

  it("Should have all options", () => {
    render(
      <ThemeProvider theme={theme}>
        <Filter allTasks={allData} />
      </ThemeProvider>
    );

    const allOptions = screen.queryAllByTestId("option");
    expect(allOptions).toHaveLength(4);
    expect(allOptions[0]).toHaveValue("all");
    expect(allOptions[1]).toHaveValue(allData.toDo.id);
    expect(allOptions[2]).toHaveValue(allData.inProgress.id);
    expect(allOptions[3]).toHaveValue(allData.done.id);
    expect(allOptions[0]).toHaveTextContent(/all/i);
    expect(allOptions[1]).toHaveTextContent(allData.toDo.title);
    expect(allOptions[2]).toHaveTextContent(allData.inProgress.title);
    expect(allOptions[3]).toHaveTextContent(allData.done.title);
  });

  it("Passed prop should be selected", () => {
    render(
      <ThemeProvider theme={theme}>
        <Filter allTasks={allData} filter={"toDo"} />
      </ThemeProvider>
    );

    const allOption = screen.getByText("all");
    const toDoOption = screen.getByText("To do");
    expect(allOption.selected).toBe(false);
    expect(toDoOption.selected).toBe(true);
  });
});
