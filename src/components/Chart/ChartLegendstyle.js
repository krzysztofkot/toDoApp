import styled from "styled-components";

const ChartLegendStyle = styled.div`
   {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    text-transform: uppercase;
    flex-direction: column;
    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      flex-direction: row;
    }
  }
`;

export default ChartLegendStyle;
