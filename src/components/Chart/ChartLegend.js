import { withTheme } from "styled-components";
import ChartLegendItem from "./ChartLegendItem";
import ChartLegendStyle from "./ChartLegendstyle";

const ChartLegend = ({ data }) => {
  const dataArr = [];

  for (const el in data) {
    dataArr.push(data[el]);
  }

  return (
    <ChartLegendStyle>
      {dataArr.map((el, index) => (
        <ChartLegendItem title={el.label} color={el.color} key={index} />
      ))}
    </ChartLegendStyle>
  );
};

export default withTheme(ChartLegend);
