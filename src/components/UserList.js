
import { useDispatch } from 'react-redux'
import { actions } from '../reduxStore'
import { Link } from "react-router-dom";
import './UserList.scss'

const { deleteUserAction } = actions;

const UserList = ({ userList }) => {
    const dispatch = useDispatch();
    const deleteUser = (id) => {
        dispatch(deleteUserAction(id));
    }
    return userList.map(user => {
        return (
            <div key={user.id} className='userTile'>
                <div className='imageContainer'>
                    <img src={user.avatar} alt={`${user.first_name} profile pic`} />
                </div>
                <div className='detailsInfo'>
                    <label>First Name :</label>
                    <label> {user.first_name}</label>
                </div>
                <div className='detailsInfo'>
                    <label>Last Name :</label>
                    <label> {user.last_name}</label>
                </div>
                <div className='detailsInfo'>
                    <label>Email ID :</label>
                    <label> {user.email}</label>
                </div>
                <div className='bottomButtons'>
                    <Link to={`/user/${user.id}/edit`}>
                        <button> Edit </button>
                    </Link>
                    <button onClick={deleteUser.bind({}, user.id)}>Delete</button>
                </div>
                <div ></div>
            </div>
        )
    })
}

export default UserList;