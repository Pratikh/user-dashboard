import { dipatcherType, inputEventHandler } from "../util";
// import { useReducer, useState } from "react";
import { Form } from "react-bootstrap";
import ProfilePicUploadModel from "./ProfilePicUploadModel";

interface ProfileType {
  avatar: string;
  first_name: string;
  email: string;
  localDispatcher: dipatcherType;
}

const style = {
  width: '128px',
  height: '128px',
}

export default function ProfileColumn({
  avatar,
  first_name: firstName,
  email,
  localDispatcher,
}: ProfileType) {
  const commonInputChangeHandler = inputEventHandler(localDispatcher, "avatar");
  return (
    <Form.Group className="col-md-3 border-right">
      <div className="d-flex flex-column align-items-center text-center py-5">
        <img alt="profile" className="mt-2 rounded" style={style} src={avatar} />
        <ProfilePicUploadModel
          commonInputChangeHandler={commonInputChangeHandler}
        />
        <span className="font-weight-bold py-2 ">{firstName}</span>
        <span className="text-black-50 py-1">{email}</span>
      </div>
    </Form.Group>
  );
}
