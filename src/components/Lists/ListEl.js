import styled from "styled-components";

const ListEl = styled.li`
   {
    border-top: 1px solid ${({ theme }) => theme.colors.colorTertiary};
    background-color: ${({ theme }) => theme.colors.colorPrimary};
    color: ${({ theme }) => theme.colors.inputFontColor};
    overflow-y: hidden;
    width: 98%;
  }
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & p {
    height: 0;
    line-height: 1.6;
    font-size: 14px;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      font-size: 12px;
    }
  }
  & p.expanded {
    height: auto;
    border-top: 1px solid ${({ theme }) => theme.colors.colorTertiary};
    padding: 6px;
    background-color: ${({ theme }) => theme.colors.colorFourth};
  }
`;

export default ListEl;
