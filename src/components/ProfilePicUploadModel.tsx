import { Button, Form, Modal } from "react-bootstrap";
import {  useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as freeIcons from "@fortawesome/free-solid-svg-icons";

interface eventObject {
  target: {
    value: string;
  };
}
interface callBack {
  commonInputChangeHandler: (arg: any) => void;
}

export default function ProfilePicUploadModel({
  commonInputChangeHandler,
}: callBack) {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOnSave = () => {
    commonInputChangeHandler({
      target: {
        value: inputValue,
      },
    });
    handleClose();
  };

  function onInputChange({ target: { value } }: eventObject) {
    setInputValue(value);
  }

  return (
    <>
      <FontAwesomeIcon
        icon={freeIcons.faEdit}
        onClick={handleShow}
        className="mt-3 ursor-pointer"
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update avatar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Past URL"
            onChange={onInputChange}
          ></Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleOnSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
