import { combineReducers } from "redux";
import name from "./name";
import moviesData from "./movies";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
    name,
    moviesData,
    visibilityFilter
});
