import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { actions } from '../reduxStore'
import './commonFormCentering.scss';
import { Loader } from '../components';

import { addNewUser } from '../apiServices';
const { addUserListAction, loadingUpdateAction } = actions;

const AddNewUser = (props) => {
    const dispatch = useDispatch();
    // local state handlers for forms data.
    const [userName, setUserName] = useState('morpheus');
    const [lastName, setLastName] = useState('mohin');
    const [emailId, setEmail] = useState('user@gmail.com');
    const [job, setJob] = useState('leader');
    const [avatar, setAvatar] = useState('https://reqres.in/img/faces/7-image.jpg');
    const isLoading = useSelector(state => state.isLoading);

    const userNameChange = ({ target: { value } }) => {
        setUserName(value);
    }

    const LastNameChange = ({ target: { value } }) => {
        setLastName(value);
    }

    const emaidIdChange = ({ target: { value } }) => {
        setEmail(value);
    }
    
    const jobChange = ({ target: { value } }) => {
        setJob(value);
    }

    const avatarChange = ({ target: { value } }) => {
        setAvatar(value);
    }

    const onSumbitData = async (event) => {
        event.preventDefault();
        dispatch(loadingUpdateAction(true));
        const data =
        {
            first_name: userName,
            last_name: lastName,
            job,
            email: emailId,
            avatar,

        }
        const res = await addNewUser(data); // passing data to api server.
        if (res.status === 201) { // if success then update local state user list
            window.alert(' User added succesfully');
            dispatch(addUserListAction([res.data]));
        } else {
            window.alert(' ERROR user not added');
        }
        dispatch(loadingUpdateAction(false));
    }

    return (
        <div className='parentContainer'>
            <h2> Page to add new user to database</h2>
            <form onSubmit={onSumbitData}>
                <div className='inputDataFields'>
                    <input onChange={userNameChange} placeholder='User Name'></input>
                </div>
                <div className='inputDataFields'>
                    <input onChange={LastNameChange} placeholder='User last name'></input>
                </div>
                <div className='inputDataFields'>
                    <input onChange={emaidIdChange} placeholder=' User Emaid id'></input>
                </div>
                <div className='inputDataFields'>
                    <input onChange={jobChange} placeholder='Job profile'></input>
                </div>
                <div className='inputDataFields'>
                    <input onChange={avatarChange} placeholder='Profile avatar'></input>
                </div>
                <button disabled={isLoading} onClick={onSumbitData}>Submit</button>
            </form>
            <Loader />
        </div>
    )

}

export default AddNewUser;