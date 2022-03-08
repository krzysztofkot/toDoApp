import { useState, useContext, useEffect } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { withTheme } from "styled-components";
import SettingsContext from "../../store/settings-context";
import ChartContainer from "./ChartContainer";
import ChartLegend from "./ChartLegend";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  defaults,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip
);

const Chart = ({ allTasks, theme, filter }) => {
  const { verticalChart: verticalChartFlag } = useContext(SettingsContext);

  const [verticalChart, isVerticalChart] = useState(verticalChartFlag);

  let arrData = [];
  let labels = [];
  let data = [];
  let barData = [];
  let backgroundColor;

  useEffect(() => {
    isVerticalChart(verticalChartFlag);
  }, [verticalChartFlag]);

  if (filter === "all") {
    for (const data in allTasks) {
      arrData.push({ ...allTasks[data] });
    }
    labels = arrData.map(item => item.title);
    data = arrData.map(item => item.tasks.length);
    backgroundColor = arrData.map(item => {
      return theme.colors[item.id];
    });
    barData = arrData.map((el, index) => {
      return {
        label: el.title,
        data: [el.tasks.length],
        backgroundColor: backgroundColor[index],
      };
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

    barData = [allTasks[filter]].map((el, index) => {
      return {
        label: el.title,
        data: [el.tasks.length],
        backgroundColor: backgroundColor[index],
      };
    });
    barData.push({
      label: "rest tasks",
      data: [taskSum - currTasksLength],
      backgroundColor: "grey",
    });
  }
  const borderColor = [...backgroundColor];

  let legendData = backgroundColor.map((color, index) => {
    return {
      color: color,
      label: labels[index],
    };
  });

  defaults.font.size = 14;

  const PieChartData = {
    labels,
    datasets: [
      {
        backgroundColor,
        borderColor,
        data,
      },
    ],
  };

  const BarChartData = {
    labels: ["tasks"],
    datasets: barData,
  };

  const content = !verticalChart ? (
    <Pie data={PieChartData} options={{ maintainAspectRatio: true }} />
  ) : (
    <Bar data={BarChartData} />
  );

  return (
    <ChartContainer>
      <div>{content}</div>
      <ChartLegend data={legendData} />
    </ChartContainer>
  );
};

export default withTheme(Chart);
