import styled from "styled-components";

const Backdrop = styled.div`
   {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: black;
    top: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.6);
    z-index: 5;
  }
`;
const ModalStyled = styled.div`
   {
    position: absolute;
    min-width: 260px;
    width: max-content;
    height: auto;
    left: 50%;
    top: 5%;
    transform: translateX(-50%);
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.colorPrimary};
    border-radius: 5px;
    z-index: 10;
    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      width: 50%;
      /* top: 0; */
    }
  }

  & fieldset {
    border: none;
  }

  & legend {
    font-size: 22px;
    margin-bottom: 12px;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      font-size: 16px;
    }
  }

  & > form > fieldset:last-of-type {
    padding: 6px;
    border: none;
    display: flex;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      flex-direction: column;
    }
  }
`;

export { Backdrop, ModalStyled };
