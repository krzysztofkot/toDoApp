import { Chart as ChartJS, ArcElement, defaults, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { withTheme } from "styled-components";
import ChartContainer from "./ChartContainer";
import ChartLegend from "./ChartLegend";

ChartJS.register(ArcElement, Tooltip);

const Chart = ({ allTasks, theme, filter }) => {
  let arrData = [];
  let labels = [];
  let data = [];
  let backgroundColor;

  if (filter === "all") {
    for (const data in allTasks) {
      arrData.push({ ...allTasks[data] });
    }
    labels = arrData.map(item => item.title);
    data = arrData.map(item => item.tasks.length);
    backgroundColor = arrData.map(item => {
      return theme.colors[item.id];
    });
  } else {
    const tasksCountHelper = [];

    for (const data in allTasks) {
      tasksCountHelper.push({ ...allTasks[data] });
    }
    const taskSum = tasksCountHelper.reduce(
      (curr, next) => curr + next.tasks.length,
      0
    );

    arrData = [allTasks[filter]];

    backgroundColor = [theme.colors[arrData[0].id], "grey"];

    const currTasksLength = arrData[0].tasks.length;

    labels.push(allTasks[filter].title, "rest tasks");
    data.push(currTasksLength, taskSum - currTasksLength);
  }
  const borderColor = [...backgroundColor];

  let legendData = backgroundColor.map((color, index) => {
    return {
      color: color,
      label: labels[index],
    };
  });

  defaults.font.size = 14;

  const chartData = {
    labels,
    datasets: [
      {
        backgroundColor,
        borderColor,
        data,
      },
    ],
  };

  return (
    <ChartContainer>
      <div>
        <Pie data={chartData} options={{ maintainAspectRatio: true }} />
      </div>
      <ChartLegend data={legendData} />
    </ChartContainer>
  );
};

export default withTheme(Chart);
