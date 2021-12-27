import styled from "styled-components";

const ListWrapper = styled.div`
   {
    margin: 20px 0;
    overflow: hidden;
    border-left: 8px solid ${props => props.bgc};
    border-bottom: 1px solid var(--color-tertiary);
    background-color: var(--color-secondary);
    // background-color: white;
    padding-bottom: 20px;
  }

  & h2 {
    border-top: 1px solid var(--color-tertiary);
    // border-bottom: 1px solid var(--color-tertiary);
    padding: 5px;
    font-weight: normal;
  }
`;

export default ListWrapper;