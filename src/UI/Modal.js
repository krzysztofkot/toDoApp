import styled from "styled-components";

const Backdrop = styled.div`
   {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: black;
    top: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }
`;
const Modal = styled.div`
   {
    position: fixed;
    width: 30%;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    padding: 10px;
    /* height: 100% */
    color: white;
    background-color: gray;
    border-radius: 5px;
    z-index: 3;
  }
`;

export { Backdrop, Modal };
