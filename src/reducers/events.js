import {READ_EVENTS} from '../actions';

import _ from 'lodash';

// reducers/index.js に渡せるようにexport
export default (events = {}, action) => {
    switch (action.type ){
        case READ_EVENTS:
            console.log("start reducer");
            // console.log(action.response.data);
            // console.log(_.mapKeys(action.response.data, 'id'));
            return _.mapKeys(action.response.data, 'id')
        default:
            return events;
    }
}