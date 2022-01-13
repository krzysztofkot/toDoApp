import styled from "styled-components";

const ListEl = styled.li`
   {
    border-top: 1px solid ${({ theme }) => theme.colors.colorTertiary};
    background-color: ${({ theme }) => theme.colors.colorPrimary};
    color: ${({ theme }) => theme.colors.inputFontColor};
    overflow: hidden;
    width: 98%;
    padding-left: 6px;

    &:last-child {
      border-bottom: 1px solid ${({ theme }) => theme.colors.colorTertiary};
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
    border-top: 1px solid ${({ theme }) => theme.colors.colorTertiary};
    padding: 6px 0;
    background-color: ${({ theme }) => theme.colors.colorFourth};
  }
`;

export default ListEl;
