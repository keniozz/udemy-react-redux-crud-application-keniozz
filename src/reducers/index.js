import { combineReducers } from 'redux';
import count from './count';

// 複数のreducerを扱うときでも、引数を列挙するだけでよい。
// storeを作成するときに用いるのでexportする。
export default combineReducers({count}); 