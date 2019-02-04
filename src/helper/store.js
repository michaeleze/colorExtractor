import {createStore} from "redux";
import {InitialReducer} from '../reducers';

export const Store = createStore(InitialReducer);
