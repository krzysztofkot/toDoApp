import styled from "styled-components";

const ChartLegendItemStyle = styled.div`
   {
    display: flex;
    margin: 10px;
    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      margin: 20px 0;
    }
  }

  & > span {
    margin: 0 10px;
    border: 1px solid black;
    display: block;
    width: 40px;
    height: 20px;
    background-color: ${props => props.color};
  }
`;

export default ChartLegendItemStyle;
