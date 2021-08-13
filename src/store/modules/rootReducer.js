import { combineReducers } from "redux";
import temperatures from "./temperatures/reducer";
import cities from "./cities/reducer";

export default combineReducers({
  temperatures,
  cities,
});
