import { combineReducers, createStore } from "redux";

import { tableReducer } from "./tableReducer";

let reducers = combineReducers({
  table: tableReducer,
});

let store = createStore(reducers);

export default store;
