import { useEffect } from "react";
import { ModalStyle, Overlay } from "./Modal.styled";

export const Modal = ({ children, onClose }) => {
  
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        console.log('ESC');
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose])

    return (
      <Overlay onClick={handleBackdropClick}>
        <ModalStyle>{children}</ModalStyle>
      </Overlay>
    );
}
// ({currentElement, showModal})
