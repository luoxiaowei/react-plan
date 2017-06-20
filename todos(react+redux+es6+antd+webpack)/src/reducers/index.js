import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import demo from './demo';

// 根reducer
const rootReducer = combineReducers({
    routing: routerReducer,
    demo
});

export default rootReducer;