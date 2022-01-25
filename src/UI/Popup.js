import reactDOM from "react-dom";

import { Backdrop, Modal } from "./Modal";

const Popup = ({ text }) => {
  return (
    <>
      {reactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {/* <Backdrop /> */}
      <Modal>{text}</Modal>
    </>
  );
};

export default Popup;
