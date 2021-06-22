import { useSelector, useDispatch } from "react-redux";
import { useReducer, useState } from "react";
import { actions } from "../reduxStore";
import { addNewUser } from "../apiServices";
import {
  Loader,
  NavigationBar,
  ProfileColumn,
  ProfileSetting,
  ExperianceDetails,
  MyCustomToast,
  Footer
} from "../components";
import "./commonFormCentering.scss";
import { Button, Container, Form } from "react-bootstrap";

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

const { updateUserAction, loadingUpdateAction, deleteUserAction } = actions;

function Edit(props) {
  const id = props.match.params.id;
  const [showToast, setShowToast] = useState(false);
  const [showToastMsg, setShowToastMsg] = useState("");

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  window.userList = userList;
  // get user detail byt there ID
  const userDetails = userList.find(({ id: userId }) => +id === +userId);
  console.log("userDetails", userDetails);
  const initialState = {
    totalExperiance: 2,
    country: "India",
    state: "Maharashtra",
    address: "Wadgaon sheri, Pune 411014",
    phoneNumber: "9763225511",
    education: "BE in Computer",
    ...userDetails,
  };
  const [state, localDispatcher] = useReducer(reducer, initialState);

  function deleteUser(id) {
    dispatch(deleteUserAction(+id));
    props.history.push("/home");
  }

  const onSumbitData = async (event) => {
    event.preventDefault();
    dispatch(loadingUpdateAction(true));

    const res = await addNewUser(state);
    if (res.status === 201) {
      // on success update perticular user data.
      console.log(" User added succesfully");
      dispatch(updateUserAction(state));
      console.log(res);
      setShowToastMsg("User data updated succesfully");
      setShowToast(true);
    }
    if (res.data.error) {
      console.log(" ERROR user not added " + res.data.error);
      setShowToastMsg(`Got error: ${res.data.error}`);
    }
    dispatch(loadingUpdateAction(false));
  };

  return (
    <div>
      <MyCustomToast {...{ showToastMsg, showToast, setShowToast }} />

      <NavigationBar />
      <Container className="rounded bg-white mt-5 mb-5">
        <Form className="row" onSubmit={onSumbitData} disabled={false}>
          <ProfileColumn {...userDetails} localDispatcher={localDispatcher} />
          <ProfileSetting {...state} localDispatcher={localDispatcher} />
          <ExperianceDetails {...state} localDispatcher={localDispatcher} />
          <Button
            variant="outline-primary"
            type="submit"
            onClick={onSumbitData}
          >
            Save Profile
          </Button>
          <Button variant="outline-danger" onClick={deleteUser.bind({}, id)}>
            Delete Profile
          </Button>
        </Form>
      </Container>
      <Loader />
      <Footer />
    </div>
  );
}

export default Edit;
