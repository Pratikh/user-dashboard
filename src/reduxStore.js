import { createStore } from "redux";

// type constants
const UPDATE_USER_LIST = 'UPDATE_USER_LIST';
const LOADING = 'LOADING';
const RESET_USERS_DATA = 'RESET_USERS_DATA';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER_DETAILS = 'UPDATE_USER_DETAILS';

// initial state for components
const initialState = {
    userList: [],
    localAddedUser: [],
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
    listClone.forEach((a, index) => {
        console.log(a.id, data.id);
        if (a.id === data.id) {
            listClone[index] = data;
        }
    })
    return listClone;
}

const checkAndAddUserData = (list, payload) => {
    // This code is written to avoid duplicate data with same id 
    const mergeData = [...list, ...payload];
    const data = [...new Map(mergeData.map(item =>
        [item.id, item])).values()];
    return data;
}


// Reducer code starts from here

const reducer = (state = initialState, { type, payload }) => {
    console.log(payload);
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

export default createStore(reducer);