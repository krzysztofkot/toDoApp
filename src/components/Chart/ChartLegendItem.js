import ChartLegendItemStyle from "./ChartLegendItemStyle";

const ChartLegendItem = ({ title, color }) => {
  return (
    <ChartLegendItemStyle color={color}>
      <span></span>
      <p>{title}</p>
    </ChartLegendItemStyle>
  );
};

export default ChartLegendItem;
