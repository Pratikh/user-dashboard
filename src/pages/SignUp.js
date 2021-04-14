import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { registerNewUser } from '../apiServices';
import './commonFormCentering.scss'
import { Loader } from '../components'
import { actions } from '../reduxStore'
const { loadingUpdateAction } = actions;

const SignUp = (props) => {
    // NOTE: for now only using email and password to sign up, we can also take other details in future.
    // below creds are for testing purpose, please remove before PROD deploy.
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);
    const [userEmailId, setUserEmailId] = useState('michael.lawson@reqres.in');
    const [userPassword, setUserPasswrod] = useState('pistol');
    const [againUserPassword, setAgainUserPasswrod] = useState('pistol');

    const emailIdInput = ({ target: { value } }) => {
        setUserEmailId(value);
    }

    const passwordInput = ({ target: { value } }) => {
        setUserPasswrod(value)
    }

    const againPasswordInput = ({ target: { value } }) => {
        setAgainUserPasswrod(value)
    }

    const onDataSubmit = async (event) => {
        event.preventDefault();
        if(userPassword !== againUserPassword){
            window.alert('Password is not same');
            return;
        }
        if (!isLoading) {
            dispatch(loadingUpdateAction(true))
            const result = await registerNewUser({
                email: userEmailId,
                password: userPassword,
            });
            if (result.status === 200) {
                window.alert('Successfully registered user. Log in using your credentials')
            } else {
                // API server give success to only existing email id.
                // So please use   michael.lawson@reqres.in    and any password to test sign up
                window.alert('Failed to registered user. Please provide existing email id in database')
            }
        }
        dispatch(loadingUpdateAction(false))
    }

    const gotoLoginPage = () => {
        props.history.push('/')
    }

    return (
        <div className='parentContainer'>
            <div>
                <h2> Sign up page for new user </h2>
            </div>
            <form onSubmit={onDataSubmit}>
                <div className='inputDataFields'>
                    <input type='text' placeholder="Please enter email id" onChange={emailIdInput}></input>
                </div>
                <div className='inputDataFields'>
                    <input type='password' placeholder="Password" onChange={passwordInput}></input>
                </div>
                <div className='inputDataFields'>
                    <input type='password' placeholder="Confirm password" onChange={againPasswordInput}></input>
                </div>
                <div>
                    <button onClick={onDataSubmit} disabled={isLoading}> SignUp </button>
                </div>
            </form>
            <div className='inputDataFields'>
                <span> If you have already registered, then please</span>
                <button onClick={gotoLoginPage} disabled={isLoading}> Goto Login</button>
            </div>
            <Loader />
        </div>
    )
}

export default SignUp;