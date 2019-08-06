import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";


//import reducers next
import userReducer from './userReducer'
import  teamReducer  from './teamReducer';
import heroReducer from "./heroReducer";


const rootReducer = combineReducers({
  user: userReducer,
  team: teamReducer,
  heroes: heroReducer
});

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(promiseMiddleware)));