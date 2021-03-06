import styled from "styled-components";

const FilterStyles = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  & select {
    text-transform: uppercase;
    padding: 0 12px;
    border: 1px solid black;
    background-color: ${({ theme }) => theme.colors.colorFourth};
    font-family: inherit;
    outline: none;
    width: 200px;

    font-size: 16px;
  }

  & select:focus {
    background-color: ${({ theme }) => theme.colors.colorSecondary};
    outline: 1px dashed ${({ theme }) => theme.colors.colorTertiary};
  }

  & label {
    padding: 16px;
  }
`;

export default FilterStyles;
