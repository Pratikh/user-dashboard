import axios from 'axios';
axios.defaults.baseURL = 'https://reqres.in/api'; // base URL appended before calling server

export const loginService = params => {
    const a = axios.post(params.url, params.data)
        .then(res => res)
        .catch(error => {
            return error.response;
        });
    return a;
}

export const getPageData = (pageNumber) => {
    const url = '/users?page=' + pageNumber;
    const promise = axios.get(url)
        .then(res => res)
        .catch(function (error) {
            return error.response;
        });
    return promise;
}

export const registerNewUser = (userData) => {
    const url = '/register';
    const promise = axios.post(url, userData)
        .then(res => {
            return res;
        })
        .catch(error => {
            return error.response;
        });

    return promise;
}

export const addNewUser = (userData)=>{
    const url = '/user';
    const promise = axios.post(url,userData)
        .then(res => res)
        .catch(function (error) {
            return error.response;
        });
    return promise;
} 