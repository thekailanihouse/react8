import { combineReducers } from "redux";
import persons from "./person";
import product from "./product";

export default combineReducers({
    persons, product
})