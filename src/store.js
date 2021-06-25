
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index.js";
import thunk from "redux-thunk";

const middlewares = [thunk];
const enhancer = compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);


export default store;