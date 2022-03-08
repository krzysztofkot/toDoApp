import reactDOM from "react-dom";
import { Backdrop, ModalStyled } from "./Modal";

import SettingsForm from "../components/Settings/SettingsForm";

const Popup = ({ onTogglePopupHandler }) => {
  const Modal = () => (
    <ModalStyled>
      <SettingsForm onClose={onTogglePopupHandler} />
    </ModalStyled>
  );
  return (
    <>
      {reactDOM.createPortal(
        <Backdrop />,
        document.getElementById("popup-root")
      )}
      {reactDOM.createPortal(
        <Modal></Modal>,
        document.getElementById("popup-root")
      )}
    </>
  );
};

export default Popup;
