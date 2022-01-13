import styled from "styled-components";

const Button = styled.button`
   {
    background-color: ${({ theme }) => theme.colors.colorSecondary};
    font-size: 16px;
    padding: 16px;
    color: white;
    border: 1px solid ${({ theme }) => theme.colors.colorTertiary};
    text-transform: uppercase;
    width: 100%;
    cursor: pointer;
    // margin: 12px 0;
    font-family: inherit;
    transition: all 0.3s;

    @media (min-width: 765px) {
      width: auto;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.colorFourth};
    border-color: ${({ theme }) => theme.colors.colorTertiary};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.colorTertiary};
    border-color: ${({ theme }) => theme.colors.colorTertiary};
    transform: translateY(2px);
  }
`;

export default Button;
