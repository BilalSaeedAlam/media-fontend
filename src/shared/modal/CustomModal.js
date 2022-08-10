import React from "react";
import Modal from "react-bootstrap/Modal";
import { useAppContext } from "../../contexts/appContext";

export default function CustomModal({ show, setShow, title, children }) {
  const { dispatch } = useAppContext();
  return (
    <Modal
      show={show}
      onHide={() => {
        dispatch({ type: "SIZE", value: "" });
        setShow(false);
      }}
      dialogClassName="modal-90w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{title ? title : ""}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
