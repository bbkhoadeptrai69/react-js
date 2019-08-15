import {firebaseConnect} from './firebaseConnect';

var redux = require('redux');
var store = redux.createStore(allReducer);
const productInitialState = {}
const allReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return state
        default:
            return state
    }
}


