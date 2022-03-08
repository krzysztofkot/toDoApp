import styled from "styled-components";

const StyledSwitch = styled.fieldset`
   {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: none;
    padding: 12px;
    margin-bottom: 16px;
  }
  span {
    padding: 0 6px;
    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      font-size: 14px;
    }
  }
  input {
    display: none;
  }

  legend {
    font-size: 22px;
    margin-bottom: 6px;
    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      font-size: 16px;
    }
  }

  input:checked + label::after {
    left: 21px;
    background-color: goldenrod;
  }
  input:checked + label {
    background-color: #343a40;
  }
  label {
    cursor: pointer;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    background-color: #bbb;
    border-radius: 20px;
  }
  label::after {
    content: "";

    position: absolute;
    width: 18px;
    height: 18px;
    background-color: #343a40;
    border-radius: 50%;
    top: 1px;
    left: 1px;
    transition: all 0.3s;
  }
`;

export default StyledSwitch;
