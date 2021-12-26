import styled from "styled-components";

const Button = styled.button`
   {
    background-color: #0d2c54;
    font-size: 16px;
    padding: 16px;
    color: white;
    border: 1px solid white;
    text-transform: uppercase;
    width: 100%;
    cursor: pointer;
    margin-left: auto;

    @media (min-width: 600px) {
      width: auto;
    }

    &:hover {
    }
  }
`;

export default Button;
