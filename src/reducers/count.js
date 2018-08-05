import {INCREMENT, DECREMENT} from '../actions';

// 状態の初期値
const initialState = { value: 0};

// reducers/index.js に渡せるようにexport
export default (state = initialState, action) => {
    switch (action.type ){
        case INCREMENT:
            return { value: state.value + 1};
        case DECREMENT:
            return { value: state.value - 1};
        default:
            return state;
    }
}