import { Button, Container, Form, Modal } from "react-bootstrap";
import { dipatcherType, inputEventHandler } from "../util";

interface ProfileSettingType {
  first_name: string;
  last_name: string;
  education: string;
  country: string;
  state: string;
  email: string;
  address: string;
  phoneNumber: string;
  localDispatcher: dipatcherType;
}

export default function ProfileSetting({
  first_name: firstName,
  last_name: lastName,
  education,
  country,
  state,
  email: emailId,
  address,
  phoneNumber,
  localDispatcher,
}: ProfileSettingType) {
  const commonInputChangeHandler = inputEventHandler(localDispatcher);

  return (
    <Form.Group className="col-md-5 border-right">
      <div className="p-3 py-5">
        <div className="d-flex mb-3">
          <h4 className="text-right">Profile Settings</h4>
        </div>
        <Form.Row className="mt-2">
          <Form.Group className="col-md-6">
            <Form.Label className="labels">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={commonInputChangeHandler}
              my-custom-prop-name="first_name"
            />
          </Form.Group>
          <Form.Group className="col-md-6">
            <Form.Label className="labels">Surname</Form.Label>
            <Form.Control
              type="text"
              value={lastName}
              placeholder="surname"
              onChange={commonInputChangeHandler}
              my-custom-prop-name="last_name"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="mt-3">
          <Form.Group className="col-md-12">
            <Form.Label className="labels">PhoneNumber</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter phone number"
              value={phoneNumber}
              my-custom-type="number"
              my-custom-prop-name="phoneNumber"
              maxLength={10}
              onChange={commonInputChangeHandler}
            />
          </Form.Group>
          <Form.Group className="col-md-12">
            <Form.Label className="labels">Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter address"
              value={address}
              my-custom-prop-name="address"
              onChange={commonInputChangeHandler}
            />
          </Form.Group>
          <Form.Group className="col-md-12">
            <Form.Label className="labels">Email ID</Form.Label>
            <Form.Control
              type="email"
              placeholder="enter email id"
              value={emailId}
              my-custom-prop-name="email"
              onChange={commonInputChangeHandler}
            />
          </Form.Group>
          <Form.Group className="col-md-12">
            <Form.Label className="labels">Education</Form.Label>
            <Form.Control
              type="text"
              placeholder="education"
              value={education}
              my-custom-prop-name="education"
              onChange={commonInputChangeHandler}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="mt-3">
          <Form.Group className="col-md-6">
            <Form.Label className="labels">Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="country"
              value={country}
              my-custom-prop-name="country"
              onChange={commonInputChangeHandler}
            />
          </Form.Group>
          <Form.Group className="col-md-6">
            <Form.Label className="labels">State/Region</Form.Label>
            <Form.Control
              type="text"
              value={state}
              placeholder="State name"
              my-custom-prop-name="state"
              onChange={commonInputChangeHandler}
            />
          </Form.Group>
        </Form.Row>
      </div>
    </Form.Group>
  );
}
