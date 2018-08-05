import { combineReducers } from 'redux';
import events from './events';

// 複数のreducerを扱うときでも、引数を列挙するだけでよい。
// storeを作成するときに用いるのでexportする。
export default combineReducers({events}); 