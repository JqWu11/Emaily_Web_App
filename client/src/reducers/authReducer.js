import { FETCH_USER } from '../actions/types';

const initialState = {}; // or any default state you prefer

// Naming the function here
function authReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}

export default authReducer;
