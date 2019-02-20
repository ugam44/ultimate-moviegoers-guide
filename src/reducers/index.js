import { combineReducers } from "redux";
import name from "./name";
import view from "./view";
import moviesData from "./movies";

export default combineReducers({
    name,
    view,
    moviesData
});
