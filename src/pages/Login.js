import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginService } from "../apiServices";
import auth from "../auth";
import "./commonFormCentering.scss";
import { actions } from "../reduxStore";
import { Loader } from "../components";
import { Form, Button } from "react-bootstrap";

const { loadingUpdateAction } = actions;

const LoginPage = (props) => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.isLoading);
  const [userName, setUserName] = useState("eve.holt@reqres.in"); // set user login creds for testing, remove this in production
  const [password, setPassword] = useState("cityslicka");

  const userNameInput = ({ target: { value } }) => {
    setUserName(value);
  };

  const passwordInput = ({ target: { value } }) => {
    setPassword(value);
  };

  const onSubmitData = async (event) => {
    event.preventDefault();
    dispatch(loadingUpdateAction(true));
    const res = await loginService({
      url: "login",
      data: { email: userName, password },
    });
    if (res.status === 200) {
      // on success goto home page.
      auth.logIn(() => props.history.push("/home"));
    } else if (res.data.error) {
      window.alert(res.data.error);
    }
    dispatch(loadingUpdateAction(false));
  };

  const gotoSignupPage = () => {
    props.history.push("/signup");
  };

  console.log(isLoading);
  return (
    <div className="parentContainer mt-5">
      <Form onSubmit={onSubmitData} className="container-fluid">
        <h3> Sign in </h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={userNameInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={passwordInput}
          />
        </Form.Group>
        <Button
          variant="btn btn-primary btn-block"
          type="submit"
          disabled={isLoading}
        >
          Submit
        </Button>
        <Form.Group className="m-2 t-2">
          <Form.Label>Do you want to</Form.Label>
          <Button
            onClick={gotoSignupPage}
            variant="secondary"
            disabled={isLoading}
          >
            Sign up
          </Button>
        </Form.Group>
      </Form>
      <Loader />
    </div>
  );
};

export default LoginPage;
