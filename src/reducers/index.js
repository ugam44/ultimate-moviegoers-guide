import { combineReducers } from "redux";
import name from "./name";
import moviesData from "./movies";

export default combineReducers({
    name,
    moviesData
});
