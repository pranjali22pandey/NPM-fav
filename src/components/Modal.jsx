import React, { useRef } from "react";
import ReactModal from "react-modal";

export const Modal = ({
  isOpen,
  onClose = () => {},
  heading,
  modalContent = null,
  modalClassNames,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={100}
      style={{
        overlay: {},
        content: {},
      }}
      contentLabel={heading}
      id={"div-id"}
      className={`container mx-auto flex items-center justify-center px-6 ${modalClassNames}`}
      ariaHideApp={true}
      shouldFocusAfterRender={true}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      shouldReturnFocusAfterClose={true}
      role={"dialog"}
      preventScroll={false}
      aria={{
        labelledby: "heading",
        describedby: "delete_prompt",
      }}
      parentSelector={() => document.querySelector("body")}
    >
      {modalContent}
    </ReactModal>
  );
};
