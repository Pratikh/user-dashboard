import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { useState } from "react";
import { actions } from '../reduxStore'
import { addNewUser } from '../apiServices';
import { Loader } from '../components'
import './commonFormCentering.scss'

const { updateUserAction, loadingUpdateAction } = actions;

const Edit = (props) => {
    const id = +props.match.params.id;
    
    const dispatch = useDispatch();
    const userList = useSelector(state => state.userList);
    const isLoading = useSelector(state => state.isLoading);
    // get user detail byt there ID
    const { first_name = 'null', last_name = 'null', email = 'null', avatar = 'null' } = userList.filter(user => +user.id === id)[0];

    const [userName, setUserName] = useState(first_name);
    const [lastName, setLastName] = useState(last_name);
    const [emailId, setEmail] = useState(email);
    const [profilAvatar, setAvatar] = useState(avatar);

    const userNameChange = ({ target: { value } }) => {
        setUserName(value);
    }

    const LastNameChange = ({ target: { value } }) => {
        setLastName(value);
    }

    const emaidIdChange = ({ target: { value } }) => {
        setEmail(value);
    }

    const avatarChange = ({ target: { value } }) => {
        setAvatar(value);
    }

    const onSumbitData = async (event) => {
        event.preventDefault();
        dispatch(loadingUpdateAction(true));
        const data = { // preparing data to pass api server.
            id,
            first_name: userName || first_name,
            last_name: lastName || last_name,
            email: emailId || email,
            avatar: profilAvatar || avatar,
        }

        const res = await addNewUser(data);
        if (res.status === 201) { // on success update perticular user data.
            window.alert(' User added succesfully');
            dispatch(updateUserAction(data));
        } if (res.data.error) {
            window.alert(' ERROR user not added ' + res.data.error);
        }
        dispatch(loadingUpdateAction(false));
    }

    return (
        <div>
            <h2> Please fill below user data</h2>
            <div className='parentContainer'>
                <form onSubmit={onSumbitData}>
                    <div className='inputDataFields'>
                        <label> User first name</label>
                        <input onChange={userNameChange} placeholder={first_name}></input>
                    </div>
                    <div className='inputDataFields'>
                        <label> User last name</label>
                        <input onChange={LastNameChange} placeholder={last_name}></input>
                    </div>
                    <div className='inputDataFields'>
                        <label> User Emaid id</label>
                        <input onChange={emaidIdChange} placeholder={email}></input>
                    </div>
                    <div className='inputDataFields'>
                        <label> Profile avatar </label>
                        <input onChange={avatarChange} placeholder={avatar}></input>
                    </div>
                    <button disabled={isLoading} onClick={onSumbitData}>Submit changes</button>
                </form>
            </div>
            <Loader />
        </div>
    )
}

export default Edit;