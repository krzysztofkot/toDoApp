import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import Container from "./Container";
import userEvent from "@testing-library/user-event";
import { toDoData as tasks, theme } from "../../test-data/testData";

describe("Container component", () => {
  it("Should render 3 task lists", () => {
    render(
      <ThemeProvider theme={theme}>
        <Container allTasks={tasks} />;
      </ThemeProvider>
    );
    const toDoListContainer = screen.getByTestId("toDo");
    const inProgressListContainer = screen.getByTestId("inProgress");
    const doneListContainer = screen.getByTestId("done");
    expect(toDoListContainer).toBeInTheDocument();
    expect(inProgressListContainer).toBeInTheDocument();
    expect(doneListContainer).toBeInTheDocument();
  });
});
