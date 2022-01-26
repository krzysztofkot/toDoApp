const emptyData = {
  toDo: {
    tasks: [],
    title: "To do",
    id: "toDo",
  },
  inProgress: {
    tasks: [],
    title: "In progress",
    id: "inProgress",
  },
  done: {
    tasks: [],
    title: "Done",
    id: "done",
  },
};

const toDoData = {
  toDo: {
    tasks: [
      { id: 1, title: "First title", desc: "First desc" },
      { id: 2, title: "Second title", desc: "Second desc" },
      { id: 3, title: "Third title", desc: "Third desc" },
    ],
    title: "To do",
    id: "toDo",
  },
  inProgress: {
    tasks: [],
    title: "In progress",
    id: "inProgress",
  },
  done: {
    tasks: [],
    title: "Done",
    id: "done",
  },
};

const inProgressData = {
  toDo: {
    tasks: [],
    title: "To do",
    id: "toDo",
  },
  inProgress: {
    tasks: [
      { id: 1, title: "First title", desc: "First desc" },
      { id: 2, title: "Second title", desc: "Second desc" },
      { id: 3, title: "Third title", desc: "Third desc" },
    ],
    title: "In progress",
    id: "inProgress",
  },
  done: {
    tasks: [],
    title: "Done",
    id: "done",
  },
};

const doneData = {
  toDo: {
    tasks: [],
    title: "To do",
    id: "toDo",
  },
  inProgress: {
    tasks: [],
    title: "In progress",
    id: "inProgress",
  },
  done: {
    tasks: [
      { id: 1, title: "First title", desc: "First desc" },
      { id: 2, title: "Second title", desc: "Second desc" },
      { id: 3, title: "Third title", desc: "Third desc" },
    ],
    title: "Done",
    id: "done",
  },
};

const allData = {
  toDo: {
    tasks: [{ id: 1, title: "First title", desc: "First desc" }],
    title: "To do",
    id: "toDo",
  },
  inProgress: {
    tasks: [{ id: 2, title: "Second title", desc: "Second desc" }],
    title: "In progress",
    id: "inProgress",
  },
  done: {
    tasks: [{ id: 3, title: "Third title", desc: "Third desc" }],
    title: "Done",
    id: "done",
  },
};

const theme = {
  colors: {
    toDo: "#f6511d",
    inProgress: "#ffb400",
    done: "#7fb800",
    inputFontColor: "#adb5bd",
    colorPrimary: "#3a4046",
    colorSecondary: "#343a40",
    colorTertiary: "#1d2023",
    colorFourth: "#3f454c",
  },
  media: {
    tablet: "765px",
  },
};

export { emptyData, toDoData, inProgressData, doneData, allData, theme };
