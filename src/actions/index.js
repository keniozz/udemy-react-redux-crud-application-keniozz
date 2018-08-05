import axios from 'axios';

export const READ_EVENTS = 'READ_EVENTS';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

// ActionCreatorを定義。viewで利用する。
// redux-thunk と axiosにより、非同期通信。
export const readEvents = () => async dispatch => { 
    console.log(" ActionCreator \"readEvents\" is called");
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
    dispatch({ type: READ_EVENTS, response });
};