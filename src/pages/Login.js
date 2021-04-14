import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react"
import { loginService } from '../apiServices';
import auth from '../auth'
import './commonFormCentering.scss'
import { actions } from '../reduxStore'
import { Loader } from '../components'

const { loadingUpdateAction } = actions;

const LoginPage = (props) => {
    const dispatch = useDispatch();
    
    const isLoading = useSelector(state => state.isLoading);
    const [userName, setUserName] = useState('eve.holt@reqres.in');// set user login creds for testing, remove this in production
    const [password, setPassword] = useState('cityslicka');

    const userNameInput = ({ target: { value } }) => {
        setUserName(value);
    }

    const passwordInput = ({ target: { value } }) => {
        setPassword(value);
    }

    const onSubmitData = async (event) => {
        event.preventDefault();
        dispatch(loadingUpdateAction(true))
        const res = await loginService({ url: 'login', data: { email: userName, password } });
        if (res.status === 200) {// on success goto home page.
            auth.logIn(() => props.history.push('/home'));
        } else if (res.data.error) {
            window.alert(res.data.error);
        }
        dispatch(loadingUpdateAction(false));
    }

    const gotoSignupPage = () => {
        props.history.push('/signup')
    }

    return (
        <div className='parentContainer'>
            <div>
                <h2> Login page for registered user</h2>
            </div>
            <form onSubmit={onSubmitData}>
                <div className='inputDataFields'>
                    <input onChange={userNameInput} placeholder='Eenter username'></input>
                </div>
                <div className='inputDataFields'>
                    <input type='password' onChange={passwordInput} placeholder='Eenter password'></input>
                </div >
                <button disabled={isLoading} onClick={onSubmitData}> Login </button>
            </form>
            <div className='inputDataFields'>
                <span> If you are not registere then please go to </span>
                <button disabled={isLoading} onClick={gotoSignupPage} > SignUp </button>
            </div>
            <Loader />
        </div>
    )
}

export default LoginPage