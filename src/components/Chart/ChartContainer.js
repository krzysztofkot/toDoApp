import styled from "styled-components";

const ChartContainer = styled.div`
   {
    margin: 30px auto;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    flex-direction: row;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      flex-direction: column;
    }
  }
`;

export default ChartContainer;
