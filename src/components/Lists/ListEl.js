import styled from "styled-components";

const ListEl = styled.li`
   {
    border-top: 1px solid var(--color-tertiary);
    background-color: var(--color-primary);
    color: var(--input-font-color);
    overflow: hidden;
    width: 98%;
    padding-left: 6px;

    &:last-child {
      border-bottom: 1px solid var(--color-tertiary);
    }
  }

  & h3 {
    padding: 5px 0;
    font-weight: normal;
    font-size: 16px;
    // font-weight: 700;
    cursor: pointer;
  }

  & p {
    height: 0;
    font-size: 14px;
    line-height: 1.6;
  }
  & p.expanded {
    height: auto;
    border-top: 1px solid var(--color-tertiary);
    padding: 6px 0;
    background-color: var(--color-fourth);
  }
`;

export default ListEl;
