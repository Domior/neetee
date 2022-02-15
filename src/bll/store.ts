import { combineReducers, createStore } from 'redux';
import { orderReducer } from './orderReducer';

const rootReducer = combineReducers({
    order: orderReducer,
})
export const store = createStore(rootReducer)
export type RootStateType = ReturnType<typeof rootReducer>;
//@ts-ignore
window.store = store;
