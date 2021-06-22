import { useDispatch, useSelector } from "react-redux";
import { useReducer, useState } from "react";
import { actions } from "../reduxStore";
import { uniqueId } from "lodash";
import "./commonFormCentering.scss";
import {
  Loader,
  NavigationBar,
  ProfileColumn,
  ProfileSetting,
  ExperianceDetails,
  Footer,
} from "../components";
// Button

import { addNewUser } from "../apiServices";
import { Button } from "react-bootstrap";
const { addUserListAction, loadingUpdateAction } = actions;
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
}
const AddNewUser = (props) => {
  const initialState = {
    id: uniqueId(),
    totalExperiance: 2,
    country: "",
    state: "",
    address: "",
    phoneNumber: "",
    education: "",
    first_name: "",
    last_name: "",
    email: "",
  };
  const [state, localDispatcher] = useReducer(reducer, initialState);
  const dispatch = useDispatch();

  const onSumbitData = async (event) => {
    event.preventDefault();
    dispatch(loadingUpdateAction(true));
    console.log(state);
    const res = await addNewUser(state); // passing data to api server.
    console.log(res.status);
    if (res.status === 201) {
      // if success then update local state user list
      // window.alert(" User added succesfully");
      dispatch(addUserListAction([res.data]));
    } else {
      window.alert(" ERROR user not added");
    }
    dispatch(loadingUpdateAction(false));
  };
  const userDetails = {
    avatar:
      "https://res.cloudinary.com/djcffe77b/image/upload/v1623929527/user-database/avatar-1577909_wweb8h.svg",
  };

  return (
    <div>
      <NavigationBar />
      <form className="row m-5 bg-white rounded">
        <ProfileColumn {...userDetails} localDispatcher={localDispatcher} />
        <ProfileSetting {...state} localDispatcher={localDispatcher} />
        <ExperianceDetails {...state} localDispatcher={localDispatcher} />
        <Button variant="outline-primary" type="submit" onClick={onSumbitData}>
          Save Profile
        </Button>
      </form>
      <Loader />
      <Footer />
    </div>
  );
};

export default AddNewUser;
