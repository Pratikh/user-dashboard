import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { registerNewUser } from "../apiServices";
import "./commonFormCentering.scss";
import { Loader } from "../components";
import { actions } from "../reduxStore";
const { loadingUpdateAction } = actions;

const SignUp = (props) => {
  // NOTE: for now only using email and password to sign up, we can also take other details in future.
  // below creds are for testing purpose, please remove before PROD deploy.
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const [userEmailId, setUserEmailId] = useState("michael.lawson@reqres.in");
  const [userPassword, setUserPasswrod] = useState("pistol");
  const [againUserPassword, setAgainUserPasswrod] = useState("pistol");

  const emailIdInput = ({ target: { value } }) => {
    setUserEmailId(value);
  };

  const passwordInput = ({ target: { value } }) => {
    setUserPasswrod(value);
  };

  const againPasswordInput = ({ target: { value } }) => {
    setAgainUserPasswrod(value);
  };

  const onDataSubmit = async (event) => {
    event.preventDefault();
    if (userPassword !== againUserPassword) {
      window.alert("Password is not same");
      return;
    }
    if (!isLoading) {
      dispatch(loadingUpdateAction(true));
      const result = await registerNewUser({
        email: userEmailId,
        password: userPassword,
      });
      if (result.status === 200) {
        window.alert(
          "Successfully registered user. Log in using your credentials"
        );
      } else {
        // API server give success to only existing email id.
        // So please use   michael.lawson@reqres.in    and any password to test sign up
        window.alert(
          "Failed to registered user. Please provide existing email id in database"
        );
      }
    }
    dispatch(loadingUpdateAction(false));
  };

  const gotoLoginPage = () => {
    props.history.push("/");
  };

  return (
    <div className="rounded bg-white mt-5 d-flex justify-content-center">
      <div className=" flex-column">
        <div className="mt-2 text-center">
          <h2>Sign up</h2>
        </div>
        <Form onSubmit={onDataSubmit}>
          <Form.Group controlId="fromBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="email"
              placeholder="Enter email id"
              onChange={emailIdInput}
            />
          </Form.Group>
          <Form.Group controlId="fromBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              type="password"
              placeholder="Enter password"
              onChange={passwordInput}
            />
          </Form.Group>
          <Form.Group controlId="fromBasicPasswordAgain">
            {/* <Form.Label>Confirm Password</Form.Label> */}
            <Form.Control
              type="password"
              placeholder="Confirm password"
              onChange={againPasswordInput}
            />
          </Form.Group>
          <Button type="submit" onClick={onDataSubmit} disabled={isLoading}>
            Sign up
          </Button>
          <Form.Group className='d-flex justify-content-end'>
            {/* <span>Want to </span> */}
            <Button
              variant="secondary"
              onClick={gotoLoginPage}
              disabled={isLoading}
            >
              Go To Login
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
