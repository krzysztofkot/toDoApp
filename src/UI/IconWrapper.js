import styled from "styled-components";

const IconWrapper = styled.div`
   {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 6px;
    flex-shrink: 0;
    /* height: 80%; */
    transform: rotate(
      ${props => {
        return props.rotation ? "-180deg" : 0;
      }}
    );
    transition: all 0.25s linear;
  }
`;

export default IconWrapper;
