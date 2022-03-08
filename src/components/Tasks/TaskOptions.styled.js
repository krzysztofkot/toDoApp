import styled from "styled-components";

const StyledTaskOptions = styled.div`
   {
    padding: 12px 12px 24px 12px;
    position: relative;
    display: flex;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      flex-direction: column;
      align-items: stretch;
    }
  }

  & div {
    position: relative;
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    /* background-color: blue; */

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      flex-direction: column;
      align-items: stretch;
    }
  }

  & input {
    border: none;
    padding: 6px;
    font: inherit;
    background-color: ${({ theme }) => theme.colors.colorSecondary};
    border-top: 1px solid ${({ theme }) => theme.colors.colorTertiary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.colorTertiary};
    color: ${({ theme }) => theme.colors.inputFontColor};
    outline: none;
    transition: all 0.2s;
    font-size: 16px;
    margin-right: 12px;
    flex: 1;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      font-size: 14px;
      order: 1;
      margin-right: 0;
    }
  }

  & input:focus {
    border-top: 1px solid #74788d;
    border-bottom: 1px solid #74788d;
  }
  & label {
    flex: 1;
    font-size: 16px;
    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      padding-bottom: 6px;
      font-size: 14px;
    }
  }
  & p {
    position: absolute;
    color: ${({ theme }) => theme.colors.errorColor};
    font-size: 12px;
    bottom: 4px;
    weight: 700;
  }
`;

export default StyledTaskOptions;
