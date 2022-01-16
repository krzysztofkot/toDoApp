import styled from "styled-components";

const ListWrapper = styled.div`
   {
    margin: 20px 0;
    position: relative;
    overflow: hidden;
    padding-left: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.colorTertiary};
    background-color: ${({ theme }) => theme.colors.colorSecondary};
  }
  &::before {
    content: "";
    height: 100%;
    width: 8px;
    display: block;
    position: absolute;
    background-color: ${props => props.bgc};
    top: 0;
    left: 0;
  }

  & > div {
    display: flex;
  }

  & h2 {
    border-top: 1px solid ${({ theme }) => theme.colors.colorTertiary};
    // border-bottom: 1px solid ${({ theme }) => theme.colors.colorTertiary};
    padding: 5px;
    font-weight: normal;
    font-size: 24px;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      font-size: 18px;
    }
  }
`;

export default ListWrapper;
