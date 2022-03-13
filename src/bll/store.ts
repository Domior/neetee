import { combineReducers, createStore } from 'redux';
import { orderReducer } from './orderReducer';
import { ProductReducer } from './productReduser';

const rootReducer = combineReducers({
    order: orderReducer,
    products:ProductReducer,
})
export const store = createStore(rootReducer)
export type RootStateType = ReturnType<typeof rootReducer>;
//@ts-ignore
window.store = store;
