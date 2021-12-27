import styled from "styled-components";

const Button = styled.button`
   {
    background-color: var(--color-secondary);
    font-size: 16px;
    padding: 16px;
    color: white;
    border: 1px solid var(--color-tertiary);
    text-transform: uppercase;
    width: 100%;
    cursor: pointer;
    // margin: 12px 0;
    font-family: inherit;
    transition: all 0.2s;

    @media (min-width: 765px) {
      width: auto;
    }
  }
`;

export default Button;
