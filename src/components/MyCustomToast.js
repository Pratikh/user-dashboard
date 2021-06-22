import { Toast } from "react-bootstrap";
import { useState } from "react";
// import ToastContainer from "react-bootstrap/ToastContainer";
const style = {
  position: "fixed",
  zIndex: "1545",
  top: "0px",
  right: "0px",
};
export default function MyCustomToast({
  showToastMsg = "This is Toast box",
  showToast = true,
  setShowToast,
}) {
  // console.log('updated Toast',flag);
  return (
    <div className="p-3 top-end" style={style}>
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
      >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Message</strong>
        </Toast.Header>
        <Toast.Body className="">{showToastMsg}</Toast.Body>
      </Toast>
    </div>
  );
}
