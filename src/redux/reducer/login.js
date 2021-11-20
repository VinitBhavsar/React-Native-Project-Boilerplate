import { client } from '../../helpers/api';
import AsyncStorage from '@react-native-community/async-storage';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';

const initialState = {
    user: {},
    isLoggedIn: false,
};


export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.data,
            };
        case TOGGLE_LOGIN:
            return {
                ...state,
                isLoggedIn: action.payload,
            };

        default:
            return state;
    }
}

//Login User
export const login = (user) => (dispatch) =>
    new Promise(function (resolve, reject) {
        client
            .post(`/login`, user)
            .then((res) => {
                if (res.meta.status === true) {
                    AsyncStorage.setItem('userToken', res.jwtToken);
                    AsyncStorage.setItem('userId', res.data.id.toString());
                    dispatch(getLoginSuccess(res));
                }
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });

//Set isLoggedIn state value
export const setIsLoggedIn = (value) => (dispatch) => {
    dispatch(toggleIsLoggedIn(value));
};

const getLoginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data,
});

//Set isLoggedIn state value
const toggleIsLoggedIn = (value) => ({
    type: TOGGLE_LOGIN,
    payload: value,
});
