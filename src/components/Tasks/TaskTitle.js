import styled from "styled-components";
const TaskTitle = styled.div`
   {
    /* padding-left: 6px; */
    display: flex;
    flex: 1 1 auto;
    align-items: center;
  }
  & h3 {
    padding: 6px 0;
    font-weight: normal;
    font-size: 16px;
    flex: 1 1 auto;
    cursor: pointer;
    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      font-size: 14px;
    }
  }
`;

export default TaskTitle;
