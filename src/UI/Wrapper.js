import styled from "styled-components";

const Wrapper = styled.div`
   {
    background-color: ${({ theme }) => theme.colors.colorPrimary};
    max-width: 1000px;
    padding: 16px;
    width: 90%;
    min-height: auto;

    margin: 20px auto;
    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      margin: 0;
      min-height: 100vh;
      width: 100%;
    }
  }
`;

export default Wrapper;
