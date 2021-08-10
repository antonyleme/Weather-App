import { combineReducers } from "redux";
import cities from "./cities/reducer";
import temperatures from "./temperatures/reducer";

export default combineReducers({
  cities,
  temperatures,
});
