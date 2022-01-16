import styled from "styled-components";

const Container = styled.div`
   {
    background-color: ${({ theme }) => theme.colors.colorPrimary};
    max-width: 1000px;
    padding: 16px;
    width: 90%;

    margin: 20px auto;
    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      margin: 0;
      width: 100%;
    }
  }
`;

export default Container;
