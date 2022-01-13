import styled from "styled-components";

const Container = styled.div`
   {
    background-color: ${({ theme }) => theme.colors.colorPrimary};
    max-width: 1000px;
    padding: 16px;

    @media (min-width: 765px) {
      margin: 20px auto;
      width: 90%;
    }
  }
`;

export default Container;
