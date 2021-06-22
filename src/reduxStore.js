import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'

// type constants
const UPDATE_USER_LIST = 'UPDATE_USER_LIST';
const LOADING = 'LOADING';
const RESET_USERS_DATA = 'RESET_USERS_DATA';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER_DETAILS = 'UPDATE_USER_DETAILS';

// initial state for components
const initialState = {
    userList: [],
    isLoading: false,
}

// All actions starts from here
const loadingUpdateAction = (payload) => {
    return ({
        type: LOADING,
        payload,
    })
}

const addUserListAction = (payload) => {
    return ({
        type: UPDATE_USER_LIST,
        payload,
    })
}

const resetUserDataAction = () => {
    return ({
        type: RESET_USERS_DATA,
    })
}

const deleteUserAction = (payload) => {
    return ({
        type: DELETE_USER,
        payload,
    })
}

const updateUserAction = (payload) => {
    return ({
        type: UPDATE_USER_DETAILS,
        payload,
    })
}

export const actions = { loadingUpdateAction, addUserListAction, resetUserDataAction, deleteUserAction, updateUserAction };


// Some helper function for reducers
const updateData = (list, data) => {
    // here we want to update only specific user data
    const listClone = [...list];
    console.log(data);
    listClone.forEach((a, index) => {
        if (a.id === data.id) {
            listClone[index] = data;
        }
    })
    return listClone;
}

const checkAndAddUserData = (list, payload) => {
    // This code is written to avoid duplicate data with same id 
    const mergeData = [...list];
    payload.forEach((a)=>{
        mergeData.push(a);
    })
    // const data = [...new Map(mergeData.map(item =>
    //     [item.id, item])).values()];
    return mergeData;
}


// Reducer code starts from here

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_USER_LIST:
            return {
                ...state,
                userList: checkAndAddUserData(state.userList, payload),
            }
        case LOADING:
            return {
                ...state,
                isLoading: payload,
            }
        case RESET_USERS_DATA:
            return {
                ...state,
                userList: [],
            }

        case DELETE_USER:
            return {
                ...state,
                userList: state.userList.filter(user => user.id !== payload),
            }

        case UPDATE_USER_DETAILS:
            return {
                ...state,
                userList: updateData(state.userList, payload)
            }

        default:
            return state;
    }
}
console.log(logger);
export default createStore(reducer, applyMiddleware(logger));