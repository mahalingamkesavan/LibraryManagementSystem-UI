// import logger from "react-logger";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./root_reducer";
import { composeWithDevTools } from "redux-devtools-extension";


export const Store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))