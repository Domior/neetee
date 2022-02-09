// import { orderReducer } from './../../src/bll/orderReducer';
import { combineReducers, createStore } from 'redux';
import { orderReducer } from './orderReducer';

const rootReducer = combineReducers({
    order: orderReducer,
})
export const store = createStore(rootReducer)
// export type RootStateType = ReturnType<typeof rootReducer>;
// window.store = store;
