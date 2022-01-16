import styled from "styled-components";

const FormControl = styled.div`
  & div {
    position: relative;
    padding-bottom: 26px;
  }

  & label {
    display: block;
    // text-transform: uppercase;
    font-size: 20px;
    padding-bottom: 12px;
    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      font-size: 16px;
    }
  }

  & input,
  & textarea {
    border: none;
    width: 100%;
    display: block;
    padding: 6px;
    font: inherit;
    background-color: ${({ theme }) => theme.colors.colorSecondary};
    border-top: 1px solid ${({ theme }) => theme.colors.colorTertiary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.colorTertiary};
    color: ${({ theme }) => theme.colors.inputFontColor};
    outline: none;
    transition: all 0.2s;
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      font-size: 14px;
    }
  }

  & textarea {
    resize: none;
    height: 75px;
  }

  & textarea:focus,
  & input:focus {
    border-top: 1px solid #74788d;
    border-bottom: 1px solid #74788d;
  }

  & p {
    position: absolute;
    bottom: 4px;
    color: red;
    font-size: 12px;
    padding: 4px 0;
  }
`;

export default FormControl;
